<template>
  <section id="education" class="education-section py-20">
    <div class="container">
      <h2 class="section-title">Education.</h2>
      <div class="education-card">
        <div class="education-content">
          <div class="school-logo">
            <img src="/icons/SPIST.png" alt="SPIST Logo" />
          </div>
          <h3 class="degree">Bachelor of Science in Information Technology</h3>
          <h4 class="school">
            Southern Philippines Institute of Science & Technology
          </h4>
          <p class="duration">2022 - Present</p>

          <div class="education-details">
            <div class="achievements">
              <h5 class="details-title">Achievements</h5>
              <ul>
                <li>ACCESS Student Organization Officer</li>
              </ul>
            </div>

            <div class="relevant-courses">
              <h5 class="details-title">Relevant Coursework</h5>
              <div class="courses-grid">
                <span class="course">stroWeb Development</span>     
                <span class="course">Database Management</span>
                <span class="course">Graphic Designer</span>
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
  name: "EducationSection",
};
</script>

<style scoped>
.education-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.education-card {
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 3rem;
  border: 1px solid var(--accent-color);
  transition: all 0.3s ease;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.education-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.school-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent-color);
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.school-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.degree {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.school {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.duration {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.education-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.details-title {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.details-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.achievements ul {
  list-style-type: none;
  padding: 0;
}

.achievements li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievements li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.course {
  background-color: var(--primary-color);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.3s ease;
}

.course:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 768px) {
  .education-card {
    padding: 1.5rem;
  }

  .degree {
    font-size: 1.5rem;
  }

  .school {
    font-size: 1.2rem;
  }

  .education-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .school-logo {
    width: 100px;
    height: 100px;
  }

  .courses-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

section {
  transition: background-color 0.5s, box-shadow 0.5s;
}
</style>
