<template>
  <nav
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled, 'menu-open': isMenuOpen }"
  >
    <div class="container navbar-container">
      <a href="#" class="navbar-brand" @click.prevent="scrollToTop">
        <img src="/icons/logo.png" alt="JG Logo" class="logo-image" />
      </a>

      <button
        class="nav-toggle"
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar-menu" :class="{ active: isMenuOpen }">
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="item.href"
              @click="closeMenu"
              class="nav-link"
              :class="{ active: activeSection === item.id }"
            >
              {{ item.text }}
              <span class="nav-link-highlight"></span>
            </a>
          </li>
          <li class="theme-toggle-container">
            <button
              @click="toggleTheme"
              class="theme-toggle"
              :aria-label="
                isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'
              "
              :title="
                isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'
              "
            >
              <font-awesome-icon :icon="isDarkTheme ? 'sun' : 'moon'" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      activeSection: "home",
      isDarkTheme: true, 
      navItems: [
        { id: "home", text: "Home", href: "#home" },
        { id: "skills", text: "Skills", href: "#skills" },
        { id: "experience", text: "Experience", href: "#experience" },
        { id: "projects", text: "Projects", href: "#projects" },
        { id: "education", text: "Education", href: "#education" },
        { id: "certificates", text: "Certificates", href: "#certificates" },
        { id: "contact", text: "Contact", href: "#contact" },
      ],
      sections: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.sections = Array.from(document.querySelectorAll("section[id]"));

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.isDarkTheme = savedTheme === "dark";
      this.applyTheme();
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      this.isDarkTheme = prefersDark;
      this.applyTheme();

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", this.handleSystemThemeChange);
    }

    this.$nextTick(() => {
      this.handleScroll();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.handleSystemThemeChange);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      this.isScrolled = scrollPosition > 20;

      const currentSection = this.sections
        .map((section) => {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            return sectionId;
          }
          return null;
        })
        .find((id) => id !== null);

      if (currentSection) {
        this.activeSection = currentSection;
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;

      if (this.isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
    toggleTheme() {
      document.body.classList.add("theme-transition");

      setTimeout(() => {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyTheme();
        localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");

        setTimeout(() => {
          document.body.classList.remove("theme-transition");
        }, 300);
      }, 50);
    },
    applyTheme() {
      if (this.isDarkTheme) {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          "content",
          this.isDarkTheme ? "#1a1a1a" : "#f5f5f5"
        );
      }
    },
    closeMenu(event) {
      if (event) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const offset = 80; 
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }
      }

      if (this.isMenuOpen) {
        this.isMenuOpen = false;
        document.body.style.overflow = "";
      }
    },
    scrollToTop(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.closeMenu();
    },
    handleSystemThemeChange(event) {
      if (!localStorage.getItem("theme")) {
        this.isDarkTheme = event.matches;
        this.applyTheme();
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--navbar-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: var(--transition);
  padding: 1rem 0;
  box-shadow: none;
}

.navbar-scrolled {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: var(--navbar-scrolled-bg);
  padding: 0.75rem 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--text-primary);
  z-index: 1001;
}

.logo-image {
  height: 40px;
  width: auto;
  transition: var(--transition);
}

.navbar-scrolled .logo-image {
  height: 35px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  transition: var(--transition);
}

.nav-link.active,
.nav-link:hover {
  color: var(--text-primary);
}

.nav-link-highlight {
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.nav-link.active .nav-link-highlight,
.nav-link:hover .nav-link-highlight {
  transform: translateX(-50%) scaleX(1);
}

.theme-toggle-container {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.theme-toggle {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1.2rem;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.theme-toggle:hover {
  color: var(--primary-color);
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.theme-toggle:active {
  transform: translateY(0);
}

[data-theme="light"] .theme-toggle {
  color: var(--secondary-color);
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow-sm);
}

[data-theme="light"] .theme-toggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow-md);
}

.nav-social {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-link {
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: var(--transition);
}

.social-link:hover {
  color: var(--primary-color);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  margin: 5px 0;
  transition: var(--transition);
  border-radius: 4px;
}

@media (max-width: 992px) {
  .nav-toggle {
    display: block;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.75, 0, 0.25, 1);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  .navbar-menu.active {
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .nav-link {
    font-size: 1.1rem;
    width: 100%;
    display: block;
  }

  .theme-toggle-container {
    margin: 1rem 0 0 0;
  }

  .menu-open {
    background-color: var(--bg-primary);
  }

  .nav-toggle.active span:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:last-child {
    transform: translateY(-7px) rotate(-45deg);
  }
}
</style>
