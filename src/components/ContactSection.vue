<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Get In Touch</h2>

      <div class="contact-content">
        <div class="contact-info" data-aos="fade-up">
          <div class="info-item">
            <div class="info-icon">
              <font-awesome-icon :icon="['fab', 'microsoft']" />
            </div>
            <div class="info-details">
              <h3>Microsoft</h3>
              <p>coffee.gomba@outlook.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div class="info-details">
              <h3>Email</h3>
              <p>jysngomba.rbm@gmail.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </div>
            <div class="info-details">
              <h3>Phone</h3>
              <p>+63 995 7988 761</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <font-awesome-icon :icon="['fas', 'location-dot']" />
            </div>
            <div class="info-details">
              <h3>Location</h3>
              <p>Philippines</p>
            </div>
          </div>

          <div class="social-links">
            <a
              href="https://github.com/jysngmb"
              target="_blank"
              class="social-link"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayro-gomba-8a7056365/"
              target="_blank"
              class="social-link"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>

            <a
              href="https://www.strava.com/athletes/49283795"
              target="_blank"
              class="social-link"
            >
              <font-awesome-icon :icon="['fab', 'strava']" />
            </a>
          </div>
        </div>

        <!-- <form
          class="contact-form"
          data-aos="fade-up"
          data-aos-delay="100"
          @submit.prevent="handleSubmit"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">
            <font-awesome-icon :icon="['fas', 'paper-plane']" /> Send Message
          </button>
        </form> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log("Form submitted:", this.form);
      // Reset form
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.contact-info {
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--accent-color);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.info-details h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.info-details p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--highlight);
  transform: translateY(-2px);
}

.contact-form {
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--accent-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid var(--accent-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--highlight);
  box-shadow: 0 0 0 2px rgba(128, 128, 128, 0.1);
}

.submit-btn {
  background-color: var(--primary-color);
  color: var(--text-primary);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.submit-btn:hover {
  background-color: var(--highlight);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info,
  .contact-form {
    padding: 1.5rem;
  }

  .info-item {
    margin-bottom: 1rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
