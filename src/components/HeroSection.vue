<template>
  <section id="home" class="hero-section min-h-screen flex items-center">
    <div class="hero-background"></div>

    <div class="container">
      <div class="hero-content">
        <div class="greeting">
          <span class="greeting-text">Hello, I'm</span>
        </div>

        <h1 class="hero-title">
          <span class="text-gradient">Jayson Gomba</span>
          <span class="wave">👋</span>
        </h1>

        <h2 class="hero-subtitle">
          <span id="type-text">Web Developer & BSIT Student</span>
          <span class="cursor">|</span>
        </h2>

        <p class="hero-description">
          A passionate BSIT student and aspiring web developer, turning
          innovative ideas into reality through code. Building the future one
          line at a time.
        </p>

        <div class="stats-container">
          <div class="stat-card">
            <div class="stat-icon">
              <font-awesome-icon icon="code" />
            </div>
            <div class="stat-number count-up">47K+</div>
            <div class="stat-label">Lines of Code</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <font-awesome-icon icon="laptop-code" />
            </div>
            <div class="stat-number count-up">7+</div>
            <div class="stat-label">Projects Completed</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <font-awesome-icon icon="mug-hot" />
            </div>
            <div class="stat-number count-up">500+</div>
            <div class="stat-label">Coffee Hours</div>
          </div>
        </div>

        <div class="cta-buttons">
          <a
            href="/resume-gomba.pdf"
            class="btn btn-primary download-btn"
            download
          >
            <font-awesome-icon icon="download" /> Download Resume
          </a>
          <a href="#contact" class="btn btn-outline-primary contact-btn">
            <font-awesome-icon icon="envelope" /> Contact Me
          </a>
        </div>

        <div class="scroll-down">
          <a href="#skills" class="scroll-link">
            <span>Scroll Down</span>
            <font-awesome-icon icon="chevron-down" class="bounce" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  mounted() {
    // Initialize typing effect
    this.initTypingEffect();
  },
  methods: {
    initTypingEffect() {
      const titles = [
        "Aspiring web developer",
        "User experience advocate",
        "Fueled by coffee",
      ];

      let titleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 100;
      const deleteSpeed = 60;
      const pauseDelay = 1500;

      const typeText = document.getElementById("type-text");

      function type() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
          typeText.textContent = currentTitle.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, 500);
          } else {
            setTimeout(type, deleteSpeed);
          }
        } else {
          typeText.textContent = currentTitle.substring(0, charIndex + 1);
          charIndex++;

          if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, pauseDelay);
          } else {
            setTimeout(type, typeSpeed);
          }
        }
      }

      setTimeout(type, 1000);
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background-color: var(--bg-primary);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
}

.greeting {
  display: inline-block;
  background-color: rgba(58, 134, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border-left: 3px solid var(--primary-color);
}

.greeting-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.wave {
  display: inline-block;
  font-size: 3rem;
  margin-left: 0.5rem;
  transform-origin: 70% 70%;
  animation: wave-hand 2s infinite;
}

@keyframes wave-hand {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 1.5rem;
  background-color: var(--primary-color);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 600px;
  color: var(--text-secondary);
  margin-left: auto;
  margin-right: auto;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.stat-card {
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-card:hover {
  background-color: var(--bg-card-hover);
  border-color: rgba(58, 134, 255, 0.2);
}

.stat-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--primary-color); /* Improved contrast */
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  justify-content: center;
}

.scroll-down {
  margin-top: 2rem;
}

.scroll-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.7;
  transition: var(--transition);
  justify-content: center;
}

.scroll-link:hover {
  opacity: 1;
  color: var(--text-primary);
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
  }

  .stats-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .hero-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>
