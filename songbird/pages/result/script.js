const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger_menu');
const wrapper = document.querySelector('.wrapper');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  burgerMenu.classList.toggle('burger_menu-active');
})

burgerMenu.addEventListener('click', (e) => {
  const withinWrapper = e.composedPath().includes(wrapper);

  if (!withinWrapper) {
    burger.classList.toggle('burger-active');
    burgerMenu.classList.toggle('burger_menu-active');
  }
})

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  document.location = '../quiz/index.html';
})


window.addEventListener('load', getLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('totalScore')) {
    let abc = localStorage.getItem('totalScore')
    console.log(abc);
  }

}