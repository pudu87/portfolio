import mannekenpis from '../img/manneken-pis.jpg'
import santiago from '../img/santiago.jpeg'

const content = document.querySelector('#content');
const headerParts = [
  {
    text: "I'm a Belgian 🇧🇪",
    img: mannekenpis,
    alt: 'Manneken Pis'
  },
  {
    text: "Living in Chile 🇨🇱",
    img: santiago,
    alt: 'Santiago de Chile'
  }
];

const loadPart = (part) => {
  const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = part.text;
    const img = document.createElement('div');
    img.style.backgroundImage = `url(${part.img})`;
  [p, img].forEach(element => {
    article.append(element);
  });
  return article;
}

const loadHeader = () => {
  const header = document.createElement('header');
    headerParts.forEach(part => {
      const article = loadPart(part);
      header.append(article);
    });
  return header;
}

const loadPersonalData = () => {
  const section = document.createElement('section');
    const p1 = document.createElement('p');
    p1.textContent = 'Click over here to find my CV';
  section.append(p1);
  return section;
}

const loadAbout = () => {
  content.append(loadHeader());
  content.append(loadPersonalData());
}

export default loadAbout
