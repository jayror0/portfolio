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
  --primary-color: #2d2d2d;
  --secondary-color: #404040;
  --accent-color: #666666;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-primary: #1a1a1a;
  --bg-secondary: #262626;
  --highlight: #808080;
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
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
}

main {
  flex: 1;
}

section {
  padding: 80px 0;
  overflow: hidden;
  background-color: var(--bg-secondary);
}

section:nth-child(even) {
  background-color: var(--bg-primary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--highlight);
  border-radius: 3px;
}

/* Utility Classes */
.text-primary {
  color: var(--text-primary) !important;
}

.bg-primary {
  background-color: var(--primary-color) !important;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

/* Responsive Typography */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}

/* Animation Classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--highlight);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-color);
}

/* Bootstrap Overrides */
.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}

.row {
  margin-right: -1rem;
  margin-left: -1rem;
}

.col,
[class*="col-"] {
  padding-right: 1rem;
  padding-left: 1rem;
}

/* Button Styles */
.btn-primary {
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
  color: var(--text-primary) !important;
}

.btn-primary:hover {
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color) !important;
}

.btn-outline-primary {
  border-color: var(--primary-color) !important;
  color: var(--text-primary) !important;
}

.btn-outline-primary:hover {
  background-color: var(--primary-color) !important;
  color: var(--text-primary) !important;
}

/* Card Styles */
.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Link Styles */
a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--highlight);
}
</style>
