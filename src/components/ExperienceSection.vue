<template>
  <section id="experience" class="experience-section py-20">
    <div class="container">
      <h2 class="section-title">Experience.</h2>

      <div class="timeline">
        ...
        <!-- <div class="timeline-item">
          <div class="timeline-content">
            <div class="company-logo">
              <img src="/company-logos/company1.png" alt="Company 1" />
            </div>
            <div class="experience-details">
              <h3 class="position">Web Developer Intern</h3>
              <h4 class="company">Tech Company Name</h4>
              <p class="duration">June 2023 - Present</p>
              <ul class="responsibilities">
                <li>Developed and maintained responsive web applications using Vue.js and Bootstrap</li>
                <li>Collaborated with senior developers on various client projects</li>
                <li>Implemented modern UI/UX designs and best practices</li>
                <li>Participated in code reviews and team meetings</li>
              </ul>
              <div class="tech-stack">
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">Bootstrap</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Git</span>
              </div>
            </div>
          </div>
        </div>        <div class="timeline-item">
          <div class="timeline-content">
            <div class="company-logo">
              <img src="/company-logos/company2.png" alt="Company 2" />
            </div>
            <div class="experience-details">
              <h3 class="position">Frontend Developer (Part-time)</h3>
              <h4 class="company">Startup Name</h4>
              <p class="duration">January 2023 - May 2023</p>
              <ul class="responsibilities">
                <li>Built responsive landing pages and web components</li>
                <li>Optimized website performance and loading times</li>
                <li>Integrated third-party APIs and services</li>
                <li>Created reusable UI components</li>
              </ul>
              <div class="tech-stack">
                <span class="tech-tag">HTML5</span>
                <span class="tech-tag">CSS3</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">React</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceSection",
};
</script>

<style scoped>
.experience-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 4rem auto 0;
  padding: 0 1rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: var(--accent-color);
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-content {
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  border: 1px solid var(--accent-color);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.company-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 2px solid var(--accent-color);
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.position {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.company {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.duration {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.responsibilities {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.responsibilities li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.responsibilities li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--primary-color);
  color: var(--text-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .position {
    font-size: 1.3rem;
  }

  .company {
    font-size: 1.1rem;
  }

  .responsibilities li {
    font-size: 0.9rem;
  }
}
</style>
