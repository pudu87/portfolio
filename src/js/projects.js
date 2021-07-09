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
    description: 'Chess on command (line).',
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
    const p = document.createElement('p');
    p.textContent = 'All of these projects are part of';
    const div = loadOdin();
  [h2, p, div].forEach(element => header.append(element));
  return header;
}

const loadOdin = () => {
  const link = document.createElement('a');
  link.href = 'https://www.theodinproject.com';
  link.classList.add('odin-project')
    const img = document.createElement('img');
    img.src = odin;
    img.alt = 'Viking head';
    const span = document.createElement('span');
    span.textContent = 'The Odin Project';
    link.append(img);
    link.append(span);
  return link;
}

const loadProjectList = () => {
  const ul = document.createElement('ul');
  projects.forEach(project => ul.append(loadProject(project)));
  return ul;
}

const loadProject = (project) => {
  const li = document.createElement('li');
    const col1 = document.createElement('div');
    col1.classList.add('col-1');
      const title = document.createElement('h4');
      title.textContent = project.title;
      col1.append(title);
      const description = document.createElement('p');
      description.textContent = project.description;
      col1.append(description);
      const github = document.createElement('a');
        const i = document.createElement('i');
        i.classList.add('fab', 'fa-github');
        github.append(i);
      github.href = project.github;
      github.target = '_blank';
      col1.append(github);
    if (project.link) {
      const link = document.createElement('a');
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-link');
        link.append(i);
      link.href = project.link;
      link.target = '_blank';
      col1.append(link);
    }
    li.append(col1);
    if (project.screenshot) {
      const col2 = document.createElement('div');
      col2.classList.add('col-2');
        const screenshot = document.createElement('img');
        screenshot.src = project.screenshot;
      col2.append(screenshot);
      li.append(col2);
    }
  li.classList.add('project');
  return li;
}

const loadProjects = () => {
  content.append(loadHeader());
  content.append(loadProjectList());
}

export default loadProjects
