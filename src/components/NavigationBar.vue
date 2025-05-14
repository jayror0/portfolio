<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <a href="" class="navbar-brand">
        <img src="/icons/logomain.png" alt="JG Logo" />
      </a>

      <button
        class="nav-toggle"
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar-menu" :class="{ active: isMenuOpen }">
        <ul class="nav-links">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#experience" @click="closeMenu">Experience</a></li>
          <li><a href="#projects" @click="closeMenu">Projects</a></li>
          <li><a href="#education" @click="closeMenu">Education</a></li>
          <li><a href="#certificates" @click="closeMenu">Certificates</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>

        <!-- <div class="nav-social">
          <a href="https://github.com/yourusername" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div> -->
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
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = "";
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background-color: var(--bg-secondary);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: var(--highlight);
}

.navbar-brand img {
  height: 40px;
  width: auto;
  vertical-align: middle;
  transition: color 0.3s ease;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.nav-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

.nav-toggle.active span:nth-child(1) {
  transform: translateY(9.5px) rotate(45deg);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: translateY(-9.5px) rotate(-45deg);
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--highlight);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--highlight);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-social {
  display: flex;
  gap: 1rem;
}

.nav-social a {
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.nav-social a:hover {
  color: var(--highlight);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: right 0.3s ease;
  }

  .navbar-menu.active {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-social {
    margin-top: 2rem;
    justify-content: center;
  }
}
</style>
