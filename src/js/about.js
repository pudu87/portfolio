import mannekenpis from '../img/manneken-pis.jpg'
import santiago from '../img/santiago.jpeg'

const content = document.querySelector('#content');

const loadHeader = () => {
  const header = document.createElement('header');
    const p1 = document.createElement('p');
    p1.textContent = "I'm a Belgian 🇧🇪";
    const img1 = document.createElement('img');
    img1.src = mannekenpis;
    const p2 = document.createElement('p');
    p2.textContent = "Living in Chile 🇨🇱";
    const img2 = document.createElement('img');
    img2.src = santiago;
  [p1, img1, p2, img2].forEach(element => {
    header.append(element);
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
