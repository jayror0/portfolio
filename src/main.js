import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
  faLocationDot,
  faToolbox,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faHeart,
  faPalette,
  faRocket,
  faCloudUploadAlt,
  faTasks,
  faBrain,
  faRobot,
  faLightbulb,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

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
  faGitAlt,
  faNpm,
  faFigma,
  faMicrosoft,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";

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
  faToolbox,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faHeart,
  faPalette,
  faRocket,
  faCloudUploadAlt,
  faTasks,
  faBrain,
  faRobot,
  faLightbulb,
  faSun,
  faMoon,
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
  faGitAlt,
  faNpm,
  faFigma,
  faMicrosoft,
  faStrava
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
