const html = '<html/>';
const css = '.css{}';
import js from '../img/javascript-logo.png'
import ruby from '../img/ruby-logo.svg'
import react from '../img/react-logo.svg'
import rails from '../img/rails-logo.png'

const content = document.querySelector('#content');
const skillData = [
  {
    name: 'languages',
    text: 'These are the languages I speak so far:',
    icon: 'fa-rocket',
    logos: [html, css, js, ruby]
  },
  {
    name: 'frameworks',
    text: 'These are the frameworks I have worked with so far:',
    icon: 'fa-space-shuttle',
    logos: [react, rails]
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

// droppings

const dropLogo = (list, logos, params, n = 0) => {
  const li = document.createElement('li');
  let logo;
  if (logos[n].match(/[\.](png|svg)$/i)) { 
    logo = document.createElement('img');
    logo.src = logos[n];
  } else {
    logo = document.createElement('span');
    logo.textContent = logos[n];
  }
  logo.classList.add('logo');
  li.append(logo);
  li.style.left = `${params.start + (n * params.space)}%`
  list.append(li);
  if (logos[n + 1]) {
    setTimeout(
      () => { dropLogo(list, logos, params, n + 1) },
      params.interval
    );
  }
}

const dropLogos = (box, logos, widths) => {
  const list = document.createElement('ul');
  list.classList.add('logos');
  box.append(list);
  const space = 20;
  const start = 50 - ((logos.length - 1) * space / 2);
  const fraction = (widths.invader / widths.box) * invaderDuration;
  const startTime = fraction + ((invaderDuration - 2 * fraction) * start / 100);
  const interval = space * (invaderDuration - (2 * fraction)) / 100;
  const params = { space, start, interval };
  setTimeout( 
    () => { dropLogo(list, logos, params) },
    startTime
  );
}

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

const moveSpaceInvader = (invader, widths) => {
  const invaderMoving = [
    { opacity: 0, transform: `translateX(-${widths.invader}%)` },
    { opacity: 1, offset: .15 },
    { opacity: 1, offset: .85 },
    { opacity: 0, transform: `translateX(${widths.box + widths.invader}px)` }
  ];
  const invaderTiming = {
    duration: invaderDuration,
    iterations: 1
  };
  invader.animate(invaderMoving, invaderTiming );
  setTimeout(() => { invader.remove() }, 5000);
}

const shakeSpaceInvader = (invader) => {
  invaderMoves.forEach(move => {
    const [y, x] = move[0];
    const pixel = [...invader.childNodes].find(child => {
      return [...child.classList].includes(`_${y}_${x}`);
    });
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

const getSpaceInvader = (animationBox, i, logos) => {
  const invader = loadSpaceInvader();
  animationBox.append(invader);
  const widths = {
    invader: invader.offsetWidth, 
    box: invader.parentNode.offsetWidth
  };
  animationBox.removeChild(i);
  moveSpaceInvader(invader, widths);
  shakeSpaceInvader(invader);
  dropLogos(animationBox, logos, widths);
}

// skill-buttons animation

const animateSkillButton = (i) => {
  const skillAnimation = [
    { transform: 'scale(1)' },
    { transform: 'scale(1.2)', offset: .5 },
    { transform: 'scale(1)' }
  ];
  const skillTiming = {
    duration: 1500,
    iterations: Infinity
  };
  i.animate(skillAnimation, skillTiming);
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
    [h, p1, p2].forEach(element => header.append(element));
  return header;
}

const loadSkills = () => {
  const skills = document.createElement('section');
  skillData.forEach(skill => {
    const article = document.createElement('article');
    article.classList.add(skill.name, 'skill');
      const h = document.createElement('h3');
      h.textContent = skill.text;
      const div = document.createElement('div');
      div.classList.add('animationBox');
      const i = document.createElement('i');
      animateSkillButton(i);
      i.classList.add('fas', skill.icon);
      i.onclick = () => { getSpaceInvader(div, i, skill.logos) };
      div.append(i);
    [h, div].forEach(element => article.append(element));
    skills.append(article);
  });
  return skills;
}

const loadHome = () => {
  content.append(loadHeader());
  content.append(loadSkills());
}

export default loadHome
