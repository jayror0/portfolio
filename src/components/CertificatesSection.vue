<template>
  <section id="certificates" class="certificates-section py-20">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Recognition</span>
        <h2 class="section-title">Certificates</h2>
      </div>

      <div class="certificates-grid" :class="{ 'collapsed': !showAllCertificates }">
        <div
          class="certificate-card"
          v-for="(certificate, index) in certificates"
          :key="certificate.id"
          @click="openPhotoSwipe(index)"
        >
          <div class="certificate-image">
            <img :src="certificate.image" alt="Certificate" />
          </div>
        </div>
      </div>
      
      <div class="view-more-container" v-if="shouldShowViewMoreButton">
        <button @click="toggleShowAllCertificates" class="view-more-btn">
          {{ showAllCertificates ? 'Show Less' : 'View More' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
  name: "CertificatesSection",
  data() {
    return {
      showAllCertificates: false,
      lightbox: null,
      certificates: [
        {
          id: 1,
          image: "/cert_photo1.png",
        },
        {
          id: 2,
          image: "/cert_photo2.png",
        },
      ],
    };
  },computed: {
    shouldShowViewMoreButton() {
      const certificatesPerRow = window.innerWidth >= 1200 ? 4 : 
                                 window.innerWidth >= 768 ? 3 : 2;
    
      return this.certificates.length > certificatesPerRow;
    }
  },  mounted() {

    window.addEventListener('resize', this.checkViewMoreButtonVisibility);
    this.initPhotoSwipe();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewMoreButtonVisibility);
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  },
  methods: {
    initPhotoSwipe() {
      this.lightbox = new PhotoSwipeLightbox({
        dataSource: this.certificates.map(cert => ({
          src: cert.image,
          width: 1920,
          height: 1080,
          alt: 'Certificate'
        })),
        pswpModule: () => import('photoswipe'),
        bgOpacity: 0.9,
        showHideAnimationType: 'zoom',
        spacing: 0.1,
        allowPanToNext: false,
        closeOnVerticalDrag: true,
        imageClickAction: 'close',
        tapAction: 'close'
      });
      
      this.lightbox.init();
    },
    openPhotoSwipe(index) {
      this.lightbox.loadAndOpen(index);
    },
    toggleShowAllCertificates() {
      this.showAllCertificates = !this.showAllCertificates;
    },
    checkViewMoreButtonVisibility() {
      this.shouldShowViewMoreButton = this.certificates.length > (window.innerWidth >= 1200 ? 4 : window.innerWidth >= 768 ? 3 : 2);
    }
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

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  transition: max-height 0.5s ease;
}

.certificates-grid.collapsed {
  max-height: calc(1 * (300px + 2rem)); 
  overflow: hidden;
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

.view-more-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.view-more-btn {
  padding: 0.75rem 2rem;
  background-image: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  border: none;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.view-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1200px) {
  .certificates-grid.collapsed {
    max-height: calc(1 * (350px + 2rem)); 
  }
}

@media (max-width: 768px) {
  .certificates-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .certificates-grid.collapsed {
    max-height: calc(1 * (350px + 2rem)); 
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
