<template>
  <section id="projects" class="projects-section py-20">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">My Recent Work</span>
        <h2 class="section-title">Featured Projects</h2>
      </div>

      <div class="projects-grid">
        <div
          class="project-card"
          v-for="project in displayedProjects"
          :key="project.title"
          @mouseenter="project.isHovered = true"
          @mouseleave="project.isHovered = false"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay" :class="{ active: project.isHovered }">
              <div class="project-links">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link demo"
                  aria-label="View live demo"
                >
                  <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMoreProjects" class="see-more-container">
        <button @click="showAllProjects" class="see-more-btn">
          <span>See More Projects</span>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </button>
      </div>
    </div>

    <div class="section-divider">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48V0h1200v120z" fill="#1e1e1e"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      showAll: false,
      initialProjectCount: 3,
      projects: [
        {
          title: "Placehub Rental System",
          description:
            "A comprehensive apartment rental platform with user authentication, apartment management, and rental agreement features. Built with a focus on user experience and modern design.",
          image: "/project-images/placehub.png",
          technologies: [
            "PHP",
            "JavaScript",
            "MySQL",
            "Bootstrap 5.3",
            "jQuery",
            "AJAX",
          ],
          demo: "https://placehub.bsit3a2025.com",
          isHovered: false,
        },
        {
          title: "Portfolio Website",
          description:
            "A modern portfolio website built with Vue.js featuring smooth animations, responsive design, and dark mode. Created to showcase my projects and skills.",
          image: "/project-images/port1.png",
          technologies: ["Vue.js", "Bootstrap 5.3", "AOS", "JavaScript"],
          demo: "https://portfolio-brown-tau-59.vercel.app",
          isHovered: false,
        },
        {
          title: "Organization Website",
          description:
            "A responsive website for an organization, showcasing its mission, vision, and services. Built with a focus on user engagement and modern design principles.",
          image: "/project-images/Screenshot 2025-05-18 193541.png",
          technologies: ["PHP", "Bootstrap 5.3", "HTML", "CSS", "JavaScript"],
          demo: "https://access-department-theta.vercel.app",
          isHovered: false,
        },
      ],
    };
  },
  computed: {
    displayedProjects() {
      if (this.showAll) {
        return this.projects;
      }
      return this.projects.slice(0, this.initialProjectCount);
    },
    hasMoreProjects() {
      return !this.showAll && this.projects.length > this.initialProjectCount;
    },
  },
  methods: {
    showAllProjects() {
      this.showAll = true;
    },
  },
};
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  background-color: var(--bg-primary);
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.project-card {
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: rgba(58, 134, 255, 0.2);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-overlay.active {
  opacity: 1;
}

.project-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  border-radius: var(--border-radius-sm);
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.project-link.demo {
  background-color: var(--primary-color);
  color: white;
}

.project-link:hover {
  box-shadow: var(--shadow-md);
}

.see-more-container {
  margin-top: 3rem;
  text-align: center;
}

.see-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: var(--border-radius);
  background: var(--bg-gradient);
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.see-more-btn:hover {
  box-shadow: var(--shadow-md);
}

.section-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.section-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 70px;
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .see-more-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
  }
}
</style>
