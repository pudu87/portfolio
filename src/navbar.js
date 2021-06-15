import { capitalize } from './helpers.js'
import loadHome from './home.js'
import loadProjects from './projects.js'
import loadAbout from './about.js'

const nav = document.querySelector('#nav');
const content = document.querySelector('#content');

const loadContent = {
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
    removeContent();
    addContent(oldContent, newContent);
  }
}

const removeContent = () => {
  content.textContent = '';
}

const addContent = (oldContent, newContent) => {
  loadContent['load' + capitalize(newContent)]();
  content.classList.replace(oldContent, newContent);
  sessionStorage.setItem('tab', newContent);
}

const loadNavbar = () => {
  links.forEach(link => {
    const span = document.createElement('span');
    const i = document.createElement('i');
    i.classList.add(link.name, 'fas', `fa-${link.fa}`);
    i.addEventListener('click', selectLink);
    span.appendChild(i);
    nav.appendChild(span);
  });
}

export default loadNavbar
