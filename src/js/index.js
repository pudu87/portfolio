import '../styles/reset.scss'
import '../styles/main.scss'
import { capitalize } from './helpers.js'
import loadNavbar from './navbar.js'
import loadHero from './hero.js'
import loadHome from './home.js'
import loadProjects from './projects.js'
import loadAbout from './about.js'
import loadFooter from './footer.js'

const content = document.querySelector('#content');
const contents = {
  loadHome,
  loadProjects,
  loadAbout
};

const loadContent = () => {
  const tab = sessionStorage.getItem('tab');
  if (tab) {
    contents['load' + capitalize(tab)]();
    content.classList.add(tab);
  } else {
    loadHome();
    content.classList.add('home');
  }
}

(function initialize() {
  loadNavbar();
  loadHero('init');
  loadContent();
  loadFooter();
})()
