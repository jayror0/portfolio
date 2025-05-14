<template>
  <section id="certificates" class="certificates-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Certificates</h2>

      <div class="certificates-grid">
        ...
        <!-- <div class="certificate-card" v-for="certificate in certificates" :key="certificate.title" data-aos="fade-up">
          <div class="certificate-image">
            <img :src="certificate.image" :alt="certificate.title" />
          </div>
          <div class="certificate-content">
            <h3 class="certificate-title">{{ certificate.title }}</h3>
            <p class="certificate-issuer">{{ certificate.issuer }}</p>
            <p class="certificate-date">{{ certificate.date }}</p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CertificatesSection",
  data() {
    return {
      certificates: [
        {
          title: "Full Stack Web Development",
          issuer: "Coursera",
          date: "2023",
          image: "/cert-logos/fullstack.png",
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          issuer: "freeCodeCamp",
          date: "2022",
          image: "/cert-logos/javascript.png",
        },
        {
          title: "Responsive Web Design",
          issuer: "freeCodeCamp",
          date: "2022",
          image: "/cert-logos/responsive.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.certificates-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.certificate-card {
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--accent-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--highlight);
}

.certificate-image {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
}

.certificate-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.certificate-title {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: center;
}

.certificate-issuer {
  font-size: 1rem;
  color: var(--highlight);
  margin-bottom: 0.25rem;
  text-align: center;
}

.certificate-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
}

@media (max-width: 768px) {
  .certificates-grid {
    grid-template-columns: 1fr;
  }

  .certificate-card {
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>
