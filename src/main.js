import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faUserCircle, 
  faQuoteLeft, 
  faDownload, 
  faEnvelope,
  faExternalLinkAlt,
  faCode,
  faLaptopCode,
  faMugHot,
  faDatabase,
  faServer,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
  faFacebook,
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
  faFigma,
  faMicrosoft,
  faStrava
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faUserCircle, 
  faQuoteLeft, 
  faDownload, 
  faEnvelope,
  faExternalLinkAlt,
  faCode,
  faLaptopCode,
  faMugHot,
  faDatabase,
  faServer,
  faPhone,
  faLocationDot,
  faGithub,
  faLinkedin,
  faFacebook,
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
  faFigma,
  faMicrosoft,
  faStrava
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
