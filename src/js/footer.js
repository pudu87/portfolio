const footer = document.querySelector('footer');

const loadFooter = () => {
  const p = document.createElement('p');
  p.textContent = 'Created by';
    const span = document.createElement('span');
    span.textContent = 'pudu87';
    p.append(span);
  const link = document.createElement('a');
  link.href = 'https://github.com/pudu87';
  link.target = '_blank';
    const i = document.createElement('i');
    i.classList.add('fab', 'fa-github');
    link.append(i);
  [p, link].forEach(element => {
    footer.append(element);
  });
}

export default loadFooter
