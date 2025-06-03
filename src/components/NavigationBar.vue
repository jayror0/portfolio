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

    this.$nextTick(() => {
      this.handleScroll();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
    closeMenu(event) {
      if (event) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const offset = 80; // Adjusted offset for header
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
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: var(--transition);
  padding: 1rem 0;
  box-shadow: none;
}

.navbar-scrolled {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: rgba(18, 18, 18, 0.95);
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
  background: var(--bg-gradient);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.nav-link.active .nav-link-highlight,
.nav-link:hover .nav-link-highlight {
  transform: translateX(-50%) scaleX(1);
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
