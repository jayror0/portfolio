<template>
  <section id="home" class="hero-section">
    <div class="container">
      <div class="hero-content" data-aos="fade-up">
        <h1 class="hero-title">
          Hi, I'm <span class="text-highlight">Jayson Gomba</span>
          <span class="wave">👋</span>
        </h1>

        <p class="hero-subtitle">
          A passionate BSIT student and aspiring web developer, turning
          innovative ideas into reality through code. Building the future one
          line at a time.
        </p>

        <div class="stats-container">
          <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
            <div class="stat-icon">
              <font-awesome-icon :icon="['fas', 'code']" />
            </div>
            <div class="stat-number">47K+</div>
            <div class="stat-label">Lines of Code</div>
          </div>

          <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
            <div class="stat-icon">
              <font-awesome-icon :icon="['fas', 'laptop-code']" />
            </div>
            <div class="stat-number">7+</div>
            <div class="stat-label">Projects Completed</div>
          </div>

          <div class="stat-card" data-aos="fade-up" data-aos-delay="300">
            <div class="stat-icon">
              <font-awesome-icon :icon="['fas', 'mug-hot']" />
            </div>
            <div class="stat-number">500+</div>
            <div class="stat-label">Coffee Hours</div>
          </div>
        </div>

        <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="/resume.pdf" class="btn btn-primary download-btn" download>
            <font-awesome-icon :icon="['fas', 'download']" /> Download Resume
          </a>
          <a href="#contact" class="btn btn-outline-primary contact-btn">
            <font-awesome-icon :icon="['fas', 'envelope']" /> Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--text-primary);
}

.text-highlight {
  color: #00ffff;
  background: linear-gradient(120deg, #00fff7, #00d4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wave {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
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
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat-card {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--accent-color);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  font-size: 2rem;
  color: var(--highlight);
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.download-btn {
  background-color: var(--primary-color);
  color: var(--text-primary);
  border: none;
}

.download-btn:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}

.contact-btn {
  border: 2px solid var(--primary-color);
  color: var(--text-primary);
  background: transparent;
}

.contact-btn:hover {
  background-color: var(--primary-color);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  font-size: 1.5rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--highlight);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .stats-container {
    gap: 1rem;
  }

  .stat-card {
    min-width: 150px;
    padding: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
