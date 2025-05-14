import { createApp } from 'vue'
import App from './App.vue'

/* Import Font Awesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import specific icons */
import { 
  faCode, 
  faLaptopCode, 
  faMugHot,
  faDownload,
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faExternalLinkAlt,
  faServer,
  faDatabase
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faStrava,
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
  faBootstrap,
  faPhp,
  faNodeJs,
  faWordpress,
  faGitAlt,
  faNpm,
  faFigma
} from '@fortawesome/free-brands-svg-icons'

/* Add icons to the library */
library.add(
  faCode,
  faLaptopCode,
  faMugHot,
  faDownload,
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faExternalLinkAlt,
  faServer,
  faDatabase,
  faGithub,
  faLinkedin,
  faInstagram,
  faStrava,
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
  faBootstrap,
  faPhp,
  faNodeJs,
  faWordpress,
  faGitAlt,
  faNpm,
  faFigma
)

const app = createApp(App)

/* Add Font Awesome component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
