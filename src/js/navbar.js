import { capitalize } from './helpers.js'
import loadHero from './hero.js'
import loadHome from './home.js'
import loadProjects from './projects.js'
import loadAbout from './about.js'

const nav = document.querySelector('#nav');
const hero = document.querySelector('#hero');
const content = document.querySelector('#content');

const contents = {
  loadHome,
  loadProjects,
  loadAbout
};
const links = [
  {
    name: 'home',
    fa: 'home'
  },
  {
    name: 'projects',
    fa: 'laptop-code'
  },
  {
    name: 'about',
    fa: 'address-card'
  }
];

const selectLink = (e) => {
  const oldContent = content.classList[0];
  const newContent = e.target.classList[0];
  if (oldContent !== newContent) {
    clearTab();
    LoadTab(oldContent, newContent);
  }
}

const clearTab = () => {
  hero.textContent = '';
  content.textContent = '';
}

const LoadTab = (oldContent, newContent) => {
  loadHero();
  contents['load' + capitalize(newContent)]();
  content.classList.replace(oldContent, newContent);
  sessionStorage.setItem('tab', newContent);
}

const loadNavbar = () => {
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');
  links.forEach(link => {
    const span = document.createElement('span');
    const i = document.createElement('i');
    i.classList.add(link.name, 'fas', `fa-${link.fa}`);
    i.addEventListener('click', selectLink);
    span.appendChild(i);
    navContainer.appendChild(span);
  });
  nav.appendChild(navContainer);
}

export default loadNavbar
