<template>
  <section id="skills" class="skills-section py-20">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">What I Work With</span>
        <h2 class="section-title">My Technical Skills</h2>
      </div>

      <div class="skills-content">
        <div class="skills-grid">
          <div class="skills-list" :class="{ collapsed: !showAllSkills }">
            <div
              class="skill-card"
              v-for="skill in allSkills"
              :key="skill.name"
            >
              <div class="skill-icon-wrapper">
                <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
              </div>
              <h3 class="skill-name">{{ skill.name }}</h3>
            </div>
          </div>
          <div
            v-if="shouldShowMoreButton"
            @click="toggleShowAllSkills"
            class="see-more-btn"
          >
            <span>{{ showAllSkills ? "Show Less" : "See More" }}</span>
            <font-awesome-icon
              :icon="showAllSkills ? 'chevron-up' : 'chevron-down'"
              class="bounce"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      showAllSkills: false,
      allSkills: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "jQuery",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/github.png",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "npm",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Canva",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        {
          name: "Vercel",
          icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
        },
        {
          name: "Netlify",
          icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        },
        {
          name: "Taiga.io",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
        {
          name: "cPanel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
        },
        {
          name: "OpenAI",
          icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/openai.png",
        },
        {
          name: "Gemini",
          icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png",
        },
        {
          name: "GitHub Copilot",
          icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/githubcopilot.png",
        },
      ],
    };
  },
  computed: {
    visibleRowCount() {
      const skillsPerRow = window.innerWidth >= 768 ? 4 : 2;
      return Math.ceil(this.allSkills.length / skillsPerRow);
    },
    shouldShowMoreButton() {
      const skillsPerRow = window.innerWidth >= 768 ? 4 : 2;
      return Math.ceil(this.allSkills.length / skillsPerRow) > 2;
    },
  },
  methods: {
    toggleShowAllSkills() {
      this.showAllSkills = !this.showAllSkills;
    },
  },
};
</script>

<style scoped>
.skills-section {
  padding: 100px 0;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
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

.section-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.skills-grid {
  margin-top: 2rem;
  text-align: center;
}

.skill-category-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-weight: 700;
  text-align: center;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  transition: max-height 0.5s ease;
}

.skills-list.collapsed {
  max-height: calc(2 * (80px + 2rem));
  overflow: hidden;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.skill-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  background-color: transparent;
  padding: 5px;
}

.skill-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0.9);
}

.skill-card:hover .skill-icon {
  filter: brightness(1);
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.skill-name {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
}

.see-more-btn {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.7;
  transition: var(--transition);
  justify-content: center;
  cursor: pointer;
  border: none;
  background: none;
}

.see-more-btn:hover {
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

@media (max-width: 768px) {
  .skills-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
