<template>
  <div id="app">
    <NavigationBar />
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import HeroSection from "./components/HeroSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import EducationSection from "./components/EducationSection.vue";
import CertificatesSection from "./components/CertificatesSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    HeroSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    EducationSection,
    CertificatesSection,
    ContactSection,
    FooterSection,
  },
};
</script>

<style>
/* Global Styles */
:root {
  /* Modern color palette */
  --primary-color: #3a86ff;
  --secondary-color: #8338ec;
  --accent-color: #ff006e;
  --accent-light: #ffbe0b;
  --accent-dark: #fb5607;
  --text-primary: #ffffff;
  --text-secondary: #e2e2e2;
  --bg-primary: #121212;
  --bg-secondary: #1e1e1e;
  --bg-card: #252525;
  --bg-card-hover: #2d2d2d;
  --bg-gradient: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.25);
  --border-radius-sm: 4px;
  --border-radius: 8px;
  --border-radius-lg: 16px;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-sans);
  line-height: 1.7;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  font-size: 16px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

main {
  flex: 1;
}

section {
  padding: 100px 0;
  overflow: hidden;
  position: relative;
}

section:nth-child(even) {
  background-color: var(--bg-secondary);
}

.section-title {
  font-size: 2.75rem;
  font-weight: 800;
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--bg-gradient);
  border-radius: var(--border-radius);
}

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: var(--shadow-sm);
  gap: 0.5rem;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--bg-gradient);
  color: var(--text-primary);
}

.btn-outline-primary {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline-primary:hover {
  background-color: var(--primary-color);
  color: var(--text-primary);
}

/* Cards */
.card {
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  overflow: hidden;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  background-color: var(--bg-card-hover);
}

/* Text styling */
.text-highlight {
  color: var(--primary-color);
  font-weight: 700;
}

.text-gradient {
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Grid system */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
}

/* Responsive utilities */
@media (max-width: 992px) {
  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  section {
    padding: 70px 0;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }
  section {
    padding: 50px 0;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}
</style>
