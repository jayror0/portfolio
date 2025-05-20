<template>
  <section id="contact" class="contact-section py-20">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Reach Out</span>
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-description">
          Have a question or want to work together? Feel free to contact me
          through any of the channels below. I'll get back to you as soon as
          possible!
        </p>
      </div>

      <div class="contact-info-container">
        <h3 class="contact-subheading">Contact Information</h3>

        <div class="info-cards">
          <div class="info-card">
            <div class="info-icon-wrapper">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="info-icon"
              />
            </div>
            <div class="info-details">
              <h4>Email</h4>
              <a href="mailto:jysngomba.rbm@gmail.com"
                >jysngomba.rbm@gmail.com</a
              >
              <a href="mailto:coffee.gomba@outlook.com"
                >coffee.gomba@outlook.com</a
              >
            </div>
          </div>
        </div>

        <div class="social-connect">
          <h4 class="social-title">Connect With Me</h4>
          <div class="social-links">
            <a
              href="https://github.com/jayror0"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="GitHub"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayro-gomba-8a7056365/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="LinkedIn"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.contact-section {
  padding: 100px 0;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.section-subtitle {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  background: rgba(58, 134, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
}

.section-description {
  color: var(--text-secondary);
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.contact-info-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-subheading {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  text-align: center;
}

.contact-subheading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.info-card:hover {
  background-color: var(--bg-card-hover);
  border-color: var(--primary-color);
}

.info-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(58, 134, 255, 0.2);
}

.info-icon {
  color: white;
  font-size: 1.2rem;
}

.info-details {
  flex-grow: 1;
}

.info-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.info-details p,
.info-details a {
  color: var(--text-secondary);
  line-height: 1.5;
  display: block;
  text-decoration: none;
  transition: var(--transition);
}

.info-details a:hover {
  color: var(--primary-color);
}

.social-connect {
  margin-top: 2rem;
  text-align: center;
}

.social-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  color: white;
  box-shadow: var(--shadow-md);
}

.social-link:nth-child(1):hover {
  background-color: #333;
  border-color: #333;
}

.social-link:nth-child(2):hover {
  background-color: #0077b5;
  border-color: #0077b5;
}

.social-link:nth-child(3):hover {
  background-color: #1877f2;
  border-color: #1877f2;
}
</style>
