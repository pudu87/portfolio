import odin from '../img/odin.svg'
import macebook from '../img/macebook.png'
import wally from '../img/wally.png'
import battleship from '../img/battleship.png'
import chess from '../img/chess.png'

const content = document.querySelector('#content');

const projects = [
  {
    title: 'Macebook',
    description: 'A very medieval facebook clone.',
    github: 'https://github.com/pudu87/macebook',
    link: 'https://pudu87.github.io/macebook/',
    screenshot: macebook
  },
  {
    title: 'Where is Wally?',
    description: "He's hiding in the backend.",
    github: 'https://github.com/pudu87/where-is-wally',
    link: 'https://guarded-crag-83910.herokuapp.com/',
    screenshot: wally
  },
  {
    title: 'Battleship',
    description: 'You sunk my battleship.',
    github: 'https://github.com/pudu87/battleship',
    link: 'https://pudu87.github.io/battleship/',
    screenshot: battleship
  },
  {
    title: 'Chess Game',
    description: 'Chess on command (line)',
    github: 'https://github.com/pudu87/chess-game',
    link: false,
    screenshot: chess
  },
  {
    title: 'This Website',
    description: "I put some work into this thing. So yeah, it get's a place in this list.",
    github: 'https://github.com/pudu87/porfolio',
    link: 'https://pudu87.github.io/portfolio/',
    screenshot: false
  }
]

const loadHeader = () => {
  const header = document.createElement('header');
    const h2 = document.createElement('h2');
    h2.textContent = 'Check out some of the stuff I made!';
    const p1 = document.createElement('p');
    p1.textContent = 'All of these projects are part of';
    const div = loadOdin();
    const p2 = document.createElement('p');
    p2.textContent = 'So far I immersed myself into';
    const p3 = document.createElement('p');
    p3.textContent = "Please help me immerse somewhat deeper. Or expand this list. It's all up to you here.";
  [h2, p1, div, p2, p3].forEach(element => {
    header.append(element);
  });
  return header;
}

const loadOdin = () => {
  const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = odin;
    img.alt = 'Viking head';
    const span = document.createElement('span');
    span.textContent = 'The Odin Project';
    div.append(img);
    div.append(span);
  return div;
}

const loadProjectList = () => {
  const ul = document.createElement('ul');
  projects.forEach(project => {
    ul.append(loadProject(project));
  });
  return ul;
}

const loadProject = (project) => {
  const li = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = project.title;
    li.append(title);
    const description = document.createElement('p');
    description.textContent = project.description;
    li.append(description);
    const github = document.createElement('a');
    github.textContent = 'githublink';
    github.href = project.github;
    li.append(github);
    if (project.link) {
      const link = document.createElement('a');
      link.textContent = 'link';
      link.href = project.github;
      li.append(link);
    }
    if (project.screenshot) {
      const screenshot = document.createElement('img');
      screenshot.src = project.screenshot;
      li.append(screenshot);
    }
  li.classList.add('project');
  return li;
}

const loadProjects = () => {
  content.append(loadHeader());
  content.append(loadProjectList());
}

export default loadProjects
