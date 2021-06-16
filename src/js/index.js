import '../styles/reset.scss'
import '../styles/main.scss'
import { capitalize } from './helpers.js'
import loadNavbar from './navbar.js'
import loadHome from './home.js'
import loadProjects from './projects.js'
import loadAbout from './about.js'

const content = document.querySelector('#content');
const loadContent = {
  loadHome,
  loadProjects,
  loadAbout
};

(function initialize() {
  loadNavbar();
  const tab = sessionStorage.getItem('tab');
  if (tab) {
    loadContent['load' + capitalize(tab)]();
    content.classList.add(tab);
  } else {
    loadHome();
    content.classList.add('home');
  }
})()
