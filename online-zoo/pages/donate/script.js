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


// amount

let radioInput = document.querySelectorAll('.item_input');
let numberInput = document.querySelector('.number_input');

radioInput.forEach((item) => {
    if (item.checked) {
        numberInput.value = item.value; //меняет поле намбер при старте
    }
    item.addEventListener('click', () => {
        numberInput.value = item.value; //меняет намбер при смене инпута
    })
});

numberInput.addEventListener('input', () => { //меняет  инпут при смене значения
    radioInput.forEach((item) => {
        item.checked = item.value === numberInput.value ? true : false;
    });
});