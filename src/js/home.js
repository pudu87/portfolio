import html from '../img/html-logo.svg'
import css from '../img/css-logo.svg'
import js from '../img/javascript-logo.png'
import ruby from '../img/ruby-logo.svg'
import rails from '../img/rails-logo.png'
import react from '../img/react-logo.svg'

const content = document.querySelector('#content');
const skillData = [
  {
    name: 'languages',
    text: 'These are the languages I speak so far:',
    icons: [html, css, js, ruby]
  },
  {
    name: 'frameworks',
    text: 'These are the frameworks I worked with so far:',
    icons: [rails, react]
  }
];
const invaderPixels = [
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0]
];
const invaderMoves = [
  [[5, 0], true], [[6, 0], true], [[5, 10], true], [[6, 10], true],
  [[7, 3], true], [[7, 4], true], [[7, 6], true], [[7, 7], true],
  [[1, 0], false], [[2, 0], false], [[3, 0], false], 
  [[1, 10], false], [[2, 10], false], [[3, 10], false],
  [[7, 1], false], [[7, 9], false]
];
const invaderDuration = 5000;

// spaceInvader

const loadSpaceInvader = () => {
  const invader = document.createElement('div');
  invader.classList.add('invader');
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 11; x++) {
      const div = document.createElement('div');
      div.classList.add(`_${y}_${x}`, 'pixel');
      invaderPixels[y][x] ?
        div.classList.add('white') :
        div.classList.add('black');
      invader.append(div);
    }
  }
  return invader;
}

const moveSpaceInvader = (invader) => {
  const invaderMoving = [
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(100vw)' }
  ];
  const invaderTiming = {
    duration: invaderDuration,
    iterations: 1
  };
  invader.animate(invaderMoving, invaderTiming );
  setTimeout(() => { invader.remove() }, 5000);
}

const shakeSpaceInvader = () => {
  invaderMoves.forEach(move => {
    const [y, x] = move[0];
    const pixel = document.querySelector(`._${y}_${x}`);
    const invaderShaking = [
      { opacity: move[1] ? 0 : 1 },
      { opacity: move[1] ? 0 : 1, offset: .45 },
      { opacity: move[1] ? 1 : 0, offset: .5 },
      { opacity: move[1] ? 1 : 0, offset: .95 },
      { opacity: move[1] ? 0 : 1 }
    ];
    const invaderTiming = {
      duration: 1000,
      iterations: Infinity
    };
    pixel.animate(invaderShaking, invaderTiming);
  });
}

const dropSkills = (list, icons, n = 0) => {
  const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = icons[n];
    img.classList.add('icon');
    div.append(img);
  div.style.width = `${100 / icons.length}%`
  list.append(div);
  if (icons[n + 1]) {
    setTimeout(
      () => { dropSkills(list, icons, n + 1)}, 
      invaderDuration / icons.length
    )
  }
}

const getSpaceInvader = (skill, button, icons) => {
  const invader = loadSpaceInvader();
  const iconList = document.createElement('ul');
  iconList.classList.add('icons');
  skill.append(invader);
  skill.append(iconList);
  skill.removeChild(button);
  moveSpaceInvader(invader);
  shakeSpaceInvader();
  dropSkills(iconList, icons);
}

// load-functions

const loadHeader = () => {
  const header = document.createElement('header');
    const h = document.createElement('h2');
    h.textContent = "Hi, I'm Sam!";
    const p1 = document.createElement('p');
    p1.textContent = 'If you reached this page, you have been granted the unique opportunity to hire me.';
    const p2 = document.createElement('p');
    p2.textContent = 'I am an autodidact web developer, looking for a job or internship.';
    [h, p1, p2].forEach(element => {
      header.append(element);
    });
  return header;
}

const loadSkills = () => {
  const skills = document.createElement('section');
  skillData.forEach(skill => {
    const article = document.createElement('article');
    article.classList.add(skill.name, 'skill');
      const h = document.createElement('h3');
      h.textContent = skill.text;
      const button = document.createElement('button');
      button.textContent = 'Show';
      button.onclick = () => { getSpaceInvader(article, button, skill.icons) };
    [h, button].forEach(element => {
      article.append(element);
    });
    skills.append(article);
  });
  return skills;
}

const loadHome = () => {
  content.append(loadHeader());
  content.append(loadSkills());
}

export default loadHome
