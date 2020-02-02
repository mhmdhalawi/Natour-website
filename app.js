const body = document.querySelector('body');
const button = document.querySelector('.navigation__button');

button.addEventListener('click', () => body.classList.toggle('hideBar'));
