<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Projects.</h2>

      <div class="projects-grid">
        <div
          class="project-card"
          v-for="project in projects"
          :key="project.title"
          data-aos="fade-up"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span
                class="tech-tag"
                v-for="tech in project.technologies"
                :key="tech"
                >{{ tech }}</span
              >
              <div class="project-links">
                <a
                  :href="project.demo"
                  target="_blank"
                  class="project-link demo"
                >
                  <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          title: "Placehub Rental System",
          description:
            "A apartment rental systemm, website application platform with user authentication, aparment management, and rental agreement terms.",
          image: "/project-images/placehub.png",
          technologies: [
            "Php",
            "Javascript",
            "Mysql",
            "Bootstrap 5.3",
            "JQuery",
            "AJAX",
          ],
          demo: "https://placehub.bsit3a2025.com/",
        },
        {
          title: "Portfolio Website",
          description:
            "A modern portfolio website built with Vue.js and featuring smooth animations and dark mode.",
          image: "/project-images/port1.png",
          technologies: ["Vue.js", "Bootstrap 5.3", "AOS", "JS"],
          demo: "http://localhost:8080/#home",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--accent-color);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--highlight);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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
  background-color: var(--highlight);
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.github {
  background-color: var(--primary-color);
  color: var(--text-primary);
}

.demo {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--primary-color);
}

.project-link:hover {
  transform: translateY(-2px);
}

.github:hover {
  background-color: var(--highlight);
}

.demo:hover {
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 0.9rem;
  }
}
</style>
