<template>
  <section id="certificates" class="certificates-section py-20">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Recognition</span>
        <h2 class="section-title">My Certificates</h2>
        <p class="section-description">
          Credentials that showcase my dedication to continuous learning and
          professional growth.
        </p>
      </div>

      <div class="certificates-grid">
        <div
          class="certificate-card"
          v-for="certificate in certificates"
          :key="certificate.id"
          @click="showModal(certificate)"
        >
          <div class="certificate-image">            <img
              :src="certificate.image"
              alt="Certificate"
            />
          </div>          <!-- Certificate content removed as requested -->
        </div>
      </div>
    </div>

    <!-- Modal for maximized image -->
    <div
      class="certificate-modal"
      v-if="selectedCertificate"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <button class="close-modal-btn" @click="closeModal">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <div class="modal-image-container">          <img
            :src="selectedCertificate.image"
            alt="Certificate"
          />
        </div>        <!-- Modal info section removed as requested -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CertificatesSection",
  data() {
    return {
      selectedCertificate: null,      certificates: [
        {
          id: 1,
          image: "/Screenshot 2025-05-30 000239.png",
        },
        {
          id: 2,
          image: "/Screenshot 2025-05-30 000254.png",
        },
        {
          id: 3,
          image: "/Screenshot 2025-05-30 000303.png",
        },
        {
          id: 4,
          image: "/Screenshot 2025-05-30 000312.png",
        },
        {
          id: 5,
          image: "/Screenshot 2025-05-30 000320.png",
        },
        {
          id: 6,
          image: "/Screenshot 2025-05-30 000331.png",
        },
        {
          id: 7,
          image: "/Screenshot 2025-05-30 000339.png",
        },
      ],
    };
  },
  methods: {
    showModal(certificate) {
      this.selectedCertificate = certificate;
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    },
    closeModal() {
      this.selectedCertificate = null;
      document.body.style.overflow = ""; // Re-enable scrolling
    },
  },
};
</script>

<style scoped>
.certificates-section {
  padding: 80px 0;
  background-color: var(--bg-primary);
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.section-subtitle {
  display: inline-block;
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
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

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.certificate-card {
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(var(--primary-color-rgb), 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.certificate-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.certificate-image {
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid rgba(var(--border-color-rgb), 0.3);
}

.certificate-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.certificate-card:hover .certificate-image img {
  transform: scale(1.03);
}

.certificate-content {
  width: 100%;
  text-align: center;
}

.certificate-title {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.certificate-issuer {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.certificate-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Modal styles */
.certificate-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.close-modal-btn:hover {
  background-color: var(--secondary-color);
  transform: scale(1.1);
}

.modal-image-container {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: white;
}

.modal-image-container img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.modal-info {
  padding: 1.5rem;
  text-align: left;
}

.modal-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.modal-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.modal-issuer,
.modal-date {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .certificates-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .section-title {
    font-size: 2rem;
  }

  .modal-content {
    width: 95%;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-description {
    font-size: 1rem;
  }
}
</style>
