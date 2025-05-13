<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Technologies and tools.</h2>

      <div class="skills-container">
        <div class="skills-grid">
          <div
            class="skill-item"
            v-for="skill in frontendSkills"
            :key="skill.name"
          >
            <font-awesome-icon :icon="skill.icon" class="skill-icon" />
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>

        <div class="skills-grid">
          <div
            class="skill-item"
            v-for="skill in backendSkills"
            :key="skill.name"
          >
            <font-awesome-icon :icon="skill.icon" class="skill-icon" />
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>

        <div class="skills-grid">
          <div
            class="skill-item"
            v-for="skill in toolsSkills"
            :key="skill.name"
          >
            <font-awesome-icon :icon="skill.icon" class="skill-icon" />
            <span class="skill-name">{{ skill.name }}</span>
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
      frontendSkills: [
        { name: "HTML5", icon: ["fab", "html5"] },
        { name: "CSS3", icon: ["fab", "css3-alt"] },
        { name: "JavaScript", icon: ["fab", "js"] },
        { name: "Vue.js", icon: ["fab", "vuejs"] },
        { name: "Bootstrap", icon: ["fab", "bootstrap"] },
        { name: "jQuery", icon: ["fab", "js"] },
      ],
      backendSkills: [
        { name: "PHP", icon: ["fab", "php"] },
        { name: "Node.js", icon: ["fab", "node-js"] },
        { name: "MySQL", icon: ["fas", "database"] },
        { name: "WordPress", icon: ["fab", "wordpress"] },
      ],
      toolsSkills: [
        { name: "Git", icon: ["fab", "git-alt"] },
        { name: "GitHub", icon: ["fab", "github"] },
        { name: "VS Code", icon: ["fas", "code"] },
        { name: "npm", icon: ["fab", "npm"] },
        { name: "Figma", icon: ["fab", "figma"] },
        { name: "cPanel", icon: ["fas", "server"] },
      ],
    };
  },
};
</script>

<style scoped>
.skills-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3rem;
}

.skill-category {
  text-align: center;
}

.category-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.category-title::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background-color: var(--highlight);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  border: 1px solid var(--accent-color);
  transition: all 0.3s ease;
  min-width: 120px;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--highlight);
}

.skill-icon {
  font-size: 2rem;
  color: var(--highlight);
  transition: color 0.3s ease;
}

.skill-item:hover .skill-icon {
  color: var(--text-primary);
}

.skill-name {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.skill-item:hover .skill-name {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skill-item {
    min-width: 100px;
    padding: 0.8rem;
  }

  .skill-icon {
    font-size: 1.5rem;
  }

  .skill-name {
    font-size: 0.8rem;
  }

  .category-title {
    font-size: 1.5rem;
  }
}
</style>
