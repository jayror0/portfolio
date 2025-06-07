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
import "./components/light-mode-overrides.css";
import "./components/theme-transition.css";

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
:root {
  --primary-color: #24d0d5;
  --secondary-color: #157d81;
  --accent-color: #064d50;
  --accent-light: #ffbe0b;
  --accent-dark: #fb5607;
  --text-primary: #ffffff;
  --text-secondary: #e2e2e2;
  --bg-primary: #111111;
  --bg-secondary: #141414;
  --bg-tertiary: #1d1d1d;
  --bg-quaternary: #262626;
  --bg-card: #333333;
  --bg-card-hover: #2d2d2d;
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.25);
  --border-radius-sm: 4px;
  --border-radius: 8px;
  --border-radius-lg: 16px;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --transition: all 0.3s ease;

  --navbar-bg: rgba(18, 18, 18, 0.8);
  --navbar-scrolled-bg: rgba(18, 18, 18, 0.95);
  --theme-transition: background-color 0.4s ease, color 0.4s ease,
    border-color 0.4s ease, box-shadow 0.4s ease;
}

[data-theme="light"] {
  --primary-color: #1a9599;
  --secondary-color: #0c7478;
  --accent-color: #045255;
  --accent-light: #f79e00;
  --accent-dark: #dd4c05;
  --text-primary: #333333;
  --text-secondary: #555555;
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --bg-tertiary: #f2f2f2;
  --bg-quaternary: #e9e9e9;
  --bg-card: #ffffff;
  --bg-card-hover: #f8f8f8;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.18);

  /* Card border in light mode */
  --card-border: 1px solid rgba(0, 0, 0, 0.08);

  --navbar-bg: rgba(255, 255, 255, 0.95);
  --navbar-scrolled-bg: rgba(255, 255, 255, 0.98);
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
  transition: var(--theme-transition);
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
  transition: var(--theme-transition);
}

section:nth-child(even) {
  background-color: var(--bg-secondary);
}

.section-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--primary-color);
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
  background: var(--primary-color);
  border-radius: var(--border-radius);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

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
  box-shadow: var(--shadow-md);
}

.btn:active {
  opacity: 0.9;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--text-primary);
}

[data-theme="light"] .btn-primary {
  color: #ffffff;
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

[data-theme="light"] .btn-outline-primary:hover {
  color: #ffffff;
}

.card {
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: var(--theme-transition);
  overflow: hidden;
  height: 100%;
  border: none;
}

[data-theme="light"] .card {
  border: var(--card-border);
}

.card:hover {
  box-shadow: var(--shadow-md);
  background-color: var(--bg-card-hover);
}

.text-highlight {
  color: var(--primary-color);
  font-weight: 700;
}

.text-gradient {
  color: var(--primary-color);
  font-weight: bold;
}

.fade-in {
  opacity: 1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
}

.hero-section {
  background-color: var(--bg-primary);
}

.skills-section {
  background-color: var(--bg-secondary);
}

.experience-section {
  background-color: var(--bg-tertiary);
}

.projects-section {
  background-color: var(--bg-quaternary);
}

.education-section {
  background-color: var(--bg-tertiary);
}

.certificates-section {
  background-color: var(--bg-secondary);
}

.contact-section {
  background-color: var(--bg-primary);
}

.project-card,
.experience-card,
.education-card,
.certificate-card {
  background-color: var(--bg-card);
  transition: transform 0.2s ease, var(--theme-transition);
  border: none;
}

[data-theme="light"] .project-card,
[data-theme="light"] .experience-card,
[data-theme="light"] .education-card,
[data-theme="light"] .certificate-card {
  border: var(--card-border);
}

.project-card:hover,
.experience-card:hover,
.education-card:hover,
.certificate-card:hover {
  transform: translateY(-4px);
  background-color: var(--bg-card-hover);
}

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

[data-theme="light"] ::-webkit-scrollbar-track {
  background: #f0f0f0;
}

[data-theme="light"] ::-webkit-scrollbar-thumb {
  background: var(--secondary-color);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
