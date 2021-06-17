const hero = document.querySelector('#hero');
const height = hero.clientHeight;
const width = hero.clientWidth;

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

const loadHero = () => {
  loadStars();
}

export default loadHero
