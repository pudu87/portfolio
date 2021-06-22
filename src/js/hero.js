const hero = document.querySelector('#hero');
const height = hero.clientHeight;
const width = hero.clientWidth;

// star-functions

const borderDistance = (x, y) => {
  const xBorder = x < 2 || x > width - 5;
  const yBorder = y < 2 || y > height - 5;
  return xBorder || yBorder;
}

const starDistance = (star, coords) => {
  return coords.reduce((min, coord) => {
    const distance = Math.hypot(star[0] - coord[0], star[1] - coord[1]);
    return distance < min ? distance : min;
  }, 100);
}

const getXY = (coords) => {
  let [x, y] = [0, 0];
  while (borderDistance(x, y) || starDistance([x, y], coords) < 15) {
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
  } 
  return [x, y]
}

const addStarSize = (star, i) => {
  star.classList.add('star');
  if (i % 4 === 0 && i % 20 !== 0) { 
    star.classList.add('_2');
  }
  if (i % 20 === 0) { 
    star.classList.add('_3');
  }
}

// meteor-functions

const getCoords = () => {
  const x1 = Math.floor((Math.random() * .96 + .02) * width);
  const y1 = Math.floor((Math.random() * .25 + .05) * height);
  const x2 = Math.floor((Math.random() * .96 + .02) * width);
  const y2 = height;
  return [[x1, y1], [x2, y2]];
}

const getAngle = (coords) => {
  const gradient = (coords[1][1] - coords[0][1]) / (coords[1][0] - coords[0][0]);
  return Math.atan(gradient) * 180 / Math.PI;
}

const getDuration = () => {
  return Math.floor((Math.random() * 8000) + 4000);
}

const animateMeteor = (meteor, props) => {
  const [[x1, y1], [x2, y2]] = props.coords;
  const meteorMoving = [
    { transform: `translate(${x1}px, ${y1}px) rotate(${props.angle}deg)` },
    { transform: `translate(${x1}px, ${y1}px) rotate(${props.angle}deg)`, offset: .5 },
    { transform: `translate(${x2}px, ${y2}px) rotate(${props.angle}deg)` }
  ];
  const meteorTiming = {
    duration: props.duration,
    iterations: 1
  };
  meteor.animate(meteorMoving, meteorTiming);
}

const animateBody = (meteorBody, props) => {
  const bodyGrowing = [
    { height: '1px', width: '1px', transform: 'translateX(-50%)' },
    { height: '2px', width: '2px', transform: 'translateX(-50%)', offset: .5 },
    { height: '3px', width: '3px', transform: 'translateX(-50%)', offset: .7 },
    { height: '4px', width: '4px', transform: 'translateX(-50%)' }
  ];
  const bodyTiming = {
    duration: props.duration,
    iterations: 1
  };
  meteorBody.animate(bodyGrowing, bodyTiming);
}

const animateTail = (meteorTail, props) => {
  const length = 100;
  const startShift = props.angle > 0 ? '-5px' : '5px'
  const endShift = props.angle > 0 ? `-${length + 10}px` : '10px';
  const tailGrowing = [
    { height: '0px', width: '0px' },
    { height: '0px', width: '0px', offset: .5 },
    { height: '1px', width: '0px', transform: `translateX(${startShift})`, offset: .5 },
    { height: '1px', width: `${length}px`, transform: `translateX(${endShift})` }
  ];
  const tailTiming = {
    duration: props.duration,
    iterations: 1
  };
  meteorTail.animate(tailGrowing, tailTiming);
}

// load-functions

const loadStars = () => {
  const amount = Math.floor(height * width / 4000);
  const coords = [];
  for (let i = 0; i < amount; i++) {
    const [x, y] = getXY(coords);
    coords.push([x, y]);
    const star = document.createElement('div');
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    addStarSize(star, i);
    hero.append(star);
  }
}

const loadMeteor = () => {
  const meteor = document.createElement('div');
    const meteorBody = document.createElement('div');
    meteorBody.classList.add('meteorBody');
    meteor.append(meteorBody);
    const meteorTail = document.createElement('div');
    meteorTail.classList.add('meteorTail');
    meteor.append(meteorTail);
  meteor.classList.add('meteor');
  hero.append(meteor);
}

const moveMeteor = () => {
  const meteor = document.querySelector('.meteor');
  const meteorBody = document.querySelector('.meteorBody');
  const meteorTail = document.querySelector('.meteorTail');
  const coords = getCoords();
  const angle = getAngle(coords);
  const duration = getDuration();
  const props = { coords, angle, duration };
  animateMeteor(meteor, props);
  animateBody(meteorBody, props);
  animateTail(meteorTail, props);
  setTimeout(moveMeteor, duration);
}

const loadHero = (init) => {
  loadStars();
  loadMeteor();
  if (init) {
    setTimeout(moveMeteor, 3000);
  }
}

export default loadHero
