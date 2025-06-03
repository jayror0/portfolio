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
                <font-awesome-icon :icon="skill.icon" class="skill-icon" />
              </div>
              <h3 class="skill-name">{{ skill.name }}</h3>
            </div>
          </div>
          <button
            v-if="shouldShowMoreButton"
            @click="toggleShowAllSkills"
            class="see-more-btn"
          >
            {{ showAllSkills ? "Show Less" : "See More" }}
          </button>
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
        // Frontend
        {
          name: "HTML5",
          icon: ["fab", "html5"],
        },
        {
          name: "CSS3",
          icon: ["fab", "css3-alt"],
        },
        {
          name: "JavaScript",
          icon: ["fab", "js"],
        },
        {
          name: "Vue.js",
          icon: ["fab", "vuejs"],
        },
        {
          name: "Bootstrap",
          icon: ["fab", "bootstrap"],
        },
        {
          name: "jQuery",
          icon: ["fab", "js"],
        },
        // Backend
        { name: "PHP", icon: ["fab", "php"] },
        {
          name: "Node.js",
          icon: ["fab", "node-js"],
        },
        {
          name: "MySQL",
          icon: ["fas", "database"],
        },
        // Tools
        {
          name: "Git",
          icon: ["fab", "git-alt"],
        },
        {
          name: "GitHub",
          icon: ["fab", "github"],
        },
        {
          name: "VS Code",
          icon: ["fas", "code"],
        },
        { name: "npm", icon: ["fab", "npm"] },
        {
          name: "Figma",
          icon: ["fab", "figma"],
        },
        {
          name: "Canva",
          icon: ["fas", "palette"],
        },
        {
          name: "Vercel",
          icon: ["fas", "rocket"],
        },
        {
          name: "Netlify",
          icon: ["fas", "cloud-upload-alt"],
        },
        {
          name: "Taiga.io",
          icon: ["fas", "tasks"],
        },
        {
          name: "cPanel",
          icon: ["fas", "server"],
        },
        {
          name: "OpenAI",
          icon: ["fas", "robot"],
        },
        {
          name: "Gemini",
          icon: ["fas", "lightbulb"],
        },
        {
          name: "GitHub Copilot",
          icon: ["fas", "code"],
        },
      ],
    };
  },
  computed: {
    visibleRowCount() {
      // Calculate how many rows of skills are visible
      const skillsPerRow = window.innerWidth >= 768 ? 4 : 2;
      return Math.ceil(this.allSkills.length / skillsPerRow);
    },
    shouldShowMoreButton() {
      // Show the button if there are more than 2 rows of skills
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
  gap: 2rem;
  transition: max-height 0.5s ease;
}

.skills-list.collapsed {
  max-height: calc(
    2 * (80px + 2rem)
  ); /* Adjust based on skill card height + gap */
  overflow: hidden;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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
  background-color: var(--primary-color);
  background-image: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: #fff;
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-name {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
}

.see-more-btn {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-image: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  border: none;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.see-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
