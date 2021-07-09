import mannekenpis from '../img/manneken-pis.jpg'
import santiago from '../img/santiago.jpeg'
import cv from '../files/Sam_Cappelle-Web_Developer.pdf'

const content = document.querySelector('#content');
const headerParts = [
  {
    text: "I'm a Belgian",
    flag: "🇧🇪",
    img: mannekenpis,
    alt: 'Manneken Pis'
  },
  {
    text: "Living in Chile",
    flag: "🇨🇱",
    img: santiago,
    alt: 'Santiago de Chile'
  }
];

const loadPart = (part) => {
  const article = document.createElement('article');
    const text = document.createElement('div');
    text.classList.add('text');
      const p = document.createElement('p');
      p.textContent = part.text;
      const flag = document.createElement('p');
      flag.textContent = part.flag;
    [p, flag].forEach(element => text.append(element));
    const img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = `url(${part.img})`;
  [text, img].forEach(element => article.append(element));
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
    const p = document.createElement('p');
    p.textContent = 'I summarized my entire life on this one-page document, just for your convenience.';
    const link = document.createElement('a');
    link.href = cv;
    link.target = '_blank';
      const i = document.createElement('i');
      i.classList.add('fas', 'fa-file');
    link.append(i);
  [p, link].forEach(element => section.append(element));
  return section;
}

const loadAbout = () => {
  content.append(loadHeader());
  content.append(loadPersonalData());
}

export default loadAbout
