<template>
  <section id="skills" class="skills-section py-20">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">What I Work With</span>
        <h2 class="section-title">My Technical Skills</h2>
        <p class="section-description">
          I'm proficient in a wide range of technologies and constantly
          expanding my skillset to create efficient, modern, and user-friendly
          web applications.
        </p>
      </div>

      <div class="skills-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="tab-button"
          :class="{ active: activeTab === tab.id }"
        >
          <font-awesome-icon :icon="tab.icon" class="tab-icon" />
          <span>{{ tab.name }}</span>
        </button>
      </div>
      <div class="skills-content">
        <!-- Frontend Skills -->
        <div class="skills-grid" v-show="activeTab === 'frontend'">
          <div class="skill-category-title">Frontend Development</div>
          <div class="skills-list">
            <div
              class="skill-card"
              v-for="skill in frontendSkills"
              :key="skill.name"
            >
              <div class="skill-icon-wrapper">
                <font-awesome-icon :icon="skill.icon" class="skill-icon" />
              </div>
              <h3 class="skill-name">{{ skill.name }}</h3>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="skills-grid" v-show="activeTab === 'backend'">
          <div class="skill-category-title">Backend Development</div>
          <div class="skills-list">
            <div
              class="skill-card"
              v-for="skill in backendSkills"
              :key="skill.name"
            >
              <div class="skill-icon-wrapper">
                <font-awesome-icon :icon="skill.icon" class="skill-icon" />
              </div>
              <h3 class="skill-name">{{ skill.name }}</h3>
            </div>
          </div>
        </div>

        <!-- Tools Skills -->
        <div class="skills-grid" v-show="activeTab === 'tools'">
          <div class="skill-category-title">Tools & Platforms</div>
          <div class="skills-list">
            <div
              class="skill-card"
              v-for="skill in toolsSkills"
              :key="skill.name"
            >
              <div class="skill-icon-wrapper">
                <font-awesome-icon :icon="skill.icon" class="skill-icon" />
              </div>
              <h3 class="skill-name">{{ skill.name }}</h3>
            </div>
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
      activeTab: "frontend",
      tabs: [
        { id: "frontend", name: "Frontend", icon: ["fab", "html5"] },
        { id: "backend", name: "Backend", icon: ["fas", "server"] },
        { id: "tools", name: "Tools", icon: ["fas", "toolbox"] },
      ],
      frontendSkills: [
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
      ],
      backendSkills: [
        { name: "PHP", icon: ["fab", "php"] },
        {
          name: "Node.js",
          icon: ["fab", "node-js"],
        },
        {
          name: "MySQL",
          icon: ["fas", "database"],
        },
      ],
      toolsSkills: [
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

.section-description {
  color: var(--text-secondary);
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.skills-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  background-color: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.tab-button:hover {
  box-shadow: var(--shadow-sm);
}

.tab-button.active {
  background: var(--primary-color);
  color: white;
  border-color: transparent;
  box-shadow: var(--shadow-md);
}

.tab-icon {
  font-size: 1rem;
}

.skills-grid {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: var(--shadow-md);
}

.skill-category-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.skill-card:hover {
  background-color: var(--bg-card-hover);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.skill-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: var(--transition);
  box-shadow: 0 5px 15px rgba(58, 134, 255, 0.2);
}

.skill-card:hover .skill-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.skill-icon {
  font-size: 1.8rem;
  color: white;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .skills-tabs {
    flex-direction: column;
    align-items: center;
  }

  .tab-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}
</style>
