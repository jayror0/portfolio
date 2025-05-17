<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-subtitle">What I Work With</span>
        <h2 class="section-title">My Technical Skills</h2>
        <p class="section-description">
          I'm proficient in a wide range of technologies and constantly
          expanding my skillset to create efficient, modern, and user-friendly
          web applications.
        </p>
      </div>

      <div class="skills-tabs" data-aos="fade-up" data-aos-delay="200">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="tab-button"
          :class="{ active: activeTab === tab.id }"
          :data-aos-delay="200 + index * 50"
        >
          <font-awesome-icon :icon="tab.icon" class="tab-icon" />
          <span>{{ tab.name }}</span>
        </button>
      </div>

      <div class="skills-content" data-aos="fade-up" data-aos-delay="300">
        <!-- Frontend Skills -->
        <div class="skills-grid" v-show="activeTab === 'frontend'">
          <div class="skill-category-title">Frontend Development</div>
          <div class="skills-list">
            <div
              class="skill-card"
              v-for="(skill, index) in frontendSkills"
              :key="skill.name"
              :data-aos="'fade-up'"
              :data-aos-delay="300 + index * 50"
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
              v-for="(skill, index) in backendSkills"
              :key="skill.name"
              :data-aos="'fade-up'"
              :data-aos-delay="300 + index * 50"
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
              v-for="(skill, index) in toolsSkills"
              :key="skill.name"
              :data-aos="'fade-up'"
              :data-aos-delay="300 + index * 50"
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

    <div class="tech-waves">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
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
        {
          name: "AJAX",
          icon: ["fas", "sync"],
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
        {
          name: "WordPress",
          icon: ["fab", "wordpress"],
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
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.tab-button.active {
  background: var(--bg-gradient);
  color: white;
  border-color: transparent;
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
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
  transform: translateY(-5px);
  background-color: var(--bg-card-hover);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.skill-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--bg-gradient);
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

.tech-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z' fill='%23252525' opacity='.25'/></svg>");
  background-size: 1200px 100px;
  animation: wave 25s linear infinite;
  z-index: 1;
}

.wave1 {
  opacity: 0.3;
  bottom: 0;
}

.wave2 {
  opacity: 0.2;
  bottom: 10px;
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(-50%);
  }
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
