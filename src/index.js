import loadNavbar from './navbar.js'
import loadHome from './home.js'

const content = document.querySelector('#content');

(function initialize() {
  loadNavbar();
  loadHome();
  content.classList.add('home');
})()
