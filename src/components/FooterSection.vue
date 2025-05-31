<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="footer-brand-link">
            <img src="/icons/logo.png" alt="JG logo" class="footer-logo" />
          </a>

          <p class="footer-tagline">
            Building the future through code, one line at a time.
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ currentYear }} Jayson Gomba. All rights reserved.
        </div>
      </div>
    </div>

    <button
      @click="scrollToTop"
      class="scroll-top-btn"
      :class="{ visible: showScrollButton }"
    >
      <font-awesome-icon icon="chevron-up" />
    </button>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      showScrollButton: false,
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
      this.showScrollButton = window.scrollY > 500;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer-section {
  background-color: var(--bg-secondary);
  padding: 50px 0 40px;
  position: relative;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-brand-link {
  display: inline-block;
}

.footer-logo {
  height: 50px;
  width: auto;
}

.footer-tagline {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition);
  font-size: 1.1rem;
}

.social-link:hover {
  color: white;
}

.social-link:nth-child(1):hover {
  background-color: #333;
}

.social-link:nth-child(2):hover {
  background-color: #0077b5;
}

.social-link:nth-child(3):hover {
  background-color: #1877f2;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.link-title {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.link-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: var(--bg-gradient);
}

.link-list,
.contact-list {
  list-style: none;
  padding: 0;
}

.link-list li,
.contact-list li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.contact-icon {
  color: var(--primary-color);
  font-size: 1rem;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.copyright,
.footer-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--bg-gradient);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: var(--shadow-md);
}

.scroll-top-btn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scroll-top-btn:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding-top: 100px;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
