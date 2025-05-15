<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="#" class="footer-brand-link">
            <img src="/icons/logomain.png" alt="JG logo" />
          </a>

          <p class="footer-description">
            Building the future through code, one line at a time.
          </p>
        </div>

        <!-- <div class="footer-links">
          <div class="link-group">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="link-group">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://github.com/yourusername" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://strava.com/athletes/yourusername" target="_blank">
                  <font-awesome-icon :icon="['fab', 'strava']" /> Strava
                </a>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h4>Contact</h4>
            <ul>
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                your.email@example.com
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']" />
                +63 912 345 6789
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                Manila, Philippines
              </li>
            </ul>
          </div>
        </div> -->
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ new Date().getFullYear() }} Jayson Gomba. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer-section {
  background-color: var(--bg-secondary);
  padding: 60px 0 20px;
  border-top: 1px solid var(--accent-color);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  padding-right: 2rem;
}

.footer-brand-link {
  display: inline-block;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-brand-link:hover {
  opacity: 0.8;
}

.footer-brand-link img {
  height: 40px;
  width: auto;
  vertical-align: middle;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.link-group h4::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--highlight);
  border-radius: 2px;
}

.link-group ul {
  list-style: none;
  padding: 0;
}

.link-group li {
  margin-bottom: 0.8rem;
}

.link-group a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.link-group a:hover {
  color: var(--highlight);
  transform: translateX(5px);
}

.link-group li:not(a) {
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--accent-color);
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-bottom p {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    padding-right: 0;
    text-align: center;
  }

  .footer-links {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .link-group h4::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .link-group a {
    justify-content: center;
  }

  .link-group li:not(a) {
    justify-content: center;
  }
}
</style>
