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

//Карусель в блоке Testimonials

import feedback from './js/feedback.js';

const inputSlider = document.querySelector('.slider');
const testimonialsWrapper = document.querySelector('.testimonials_wrapper');
const numberFeedback = 11;

let workTransformSlider = (numberStartItems = 4, valueTransform = 24.9) => {

    inputSlider.max = numberFeedback - numberStartItems; //меняет max input
    inputSlider.addEventListener('input', () => {

        let num = inputSlider.value * -valueTransform;
        testimonialsWrapper.style.transform = `translateX(${num}%)`
    })
}
workTransformSlider();

let width1600 = window.matchMedia("(min-width: 1600px)");
width1600.addEventListener('change', function(mm) {
    if (mm.matches) {
        workTransformSlider();
    } else {
        workTransformSlider(3, 33.76);
    }
});

if (document.documentElement.clientWidth < 1600) {
    workTransformSlider(3, 33.76);
}

const shuffleArray = (array, number) => {
    const arr = array.slice(); //копирую массив
    arr.sort(() => Math.random() - 0.5) //перемешиваю
    return arr.splice(0, number); // возвращаю нужное количество отзывов
}

let arrayOfFeedback = shuffleArray(feedback, numberFeedback);

function createItem(feedback, i) {
    const item = document.createElement('div')
    item.classList.add('testimonials__item');

    const itemUser = document.createElement('div');
    itemUser.classList.add('testimonials__item__user');
    const itemIcon = document.createElement('div');
    itemIcon.classList.add('testimonials__item__user_icon');
    const imgItemIcon = document.createElement('img');
    imgItemIcon.src = feedback[i].icon;
    imgItemIcon.alt = feedback[i].name;
    const itemName = document.createElement('div')
    itemName.classList.add('testimonials__item__user_name');
    itemName.innerHTML = feedback[i].name;
    const itemLocal = document.createElement('div');
    itemLocal.classList.add('testimonials__item__user_local');
    itemLocal.innerHTML = feedback[i].location;
    const itemDivider = document.createElement('div');
    itemDivider.classList.add('testimonials__item__user_divider');
    itemDivider.innerHTML = '•';
    const itemTime = document.createElement('div');
    itemTime.classList.add('testimonials__item__user_time');
    itemTime.innerHTML = feedback[i].time;
    const itemFeedback = document.createElement('div');
    itemFeedback.classList.add('testimonials__item_feedback');
    itemFeedback.innerHTML = feedback[i].feedback;

    item.append(itemUser);
    itemUser.append(itemIcon);
    itemIcon.append(imgItemIcon);
    itemUser.append(itemName);
    itemUser.append(itemLocal);
    itemUser.append(itemDivider);
    itemUser.append(itemTime);
    item.append(itemFeedback);

    return item;
}

for (let i = 0; i < numberFeedback; i++) {
    testimonialsWrapper.append(createItem(arrayOfFeedback, i));
}

//Попап при нажатии на отзыв в блоке Testimonials.
let popup = () => {
    const testimonialsItem = document.querySelectorAll('.testimonials__item');
    testimonialsItem.forEach((item, index) => {

        item.addEventListener('click', () => {

            const popupWrapper = document.createElement('div')
            popupWrapper.classList.add('popup_wrapper');
            popupWrapper.id = 'popup_wrapper';

            popupWrapper.append(createItem(arrayOfFeedback, index));

            const popupClose = document.createElement('div')
            popupClose.classList.add('popup_close');

            const popupCloseLine1 = document.createElement('div')
            popupCloseLine1.classList.add('popup_close_line');
            const popupCloseLine2 = document.createElement('div')
            popupCloseLine2.classList.add('popup_close_line');

            popupWrapper.append(popupClose);
            popupClose.append(popupCloseLine1);
            popupClose.append(popupCloseLine2);

            // popupClose.addEventListener('click', () => { document.getElementById("popup_wrapper").remove() })
            popupWrapper.addEventListener('click', (e) => {
                const withinWrapper = e.composedPath().includes(document.querySelector('.popup_wrapper .testimonials__item'));

                if (!withinWrapper) {
                    if (document.getElementById("popup_wrapper"));
                    document.getElementById("popup_wrapper").remove();
                }
            })
            return testimonialsWrapper.append(popupWrapper);
        })

    })
}

let width999 = window.matchMedia("(max-width: 999px)");
width999.addEventListener('change', function(mm) {
    if (mm.matches) {
        popup();
    }
});

if (document.documentElement.clientWidth < 1000) {
    popup();
}


// A carousel in the Pets block.
import animals from './js/animals.js';

const numberStartItems = 6;

const createBlock = () => {

    const petsWrapper = document.querySelector('.pets_wrapper');

    const block = document.createElement('div');
    block.classList.add('pets__block');

    for (let i = 0; i < numberStartItems; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        block.append(item);

        const itemImg = document.createElement('div');
        itemImg.classList.add('item_img');
        item.append(itemImg);

        const itemImgIMG = document.createElement('img');
        itemImg.append(itemImgIMG);

        const itemDscr = document.createElement('div');
        itemDscr.classList.add('item_dscr');
        item.append(itemDscr);

        const name = document.createElement('div');
        name.classList.add('name');
        itemDscr.append(name);

        const place = document.createElement('div');
        place.classList.add('place');
        itemDscr.append(place);

        const food = document.createElement('div');
        food.classList.add('food');
        itemDscr.append(food);
    }
    return petsWrapper.append(block);
}

const numBlocks = 10;
for (let i = 0; i < numBlocks; i++) {
    createBlock();
}

const petsWrapper = document.querySelector('.pets_wrapper');
const petsChild = petsWrapper.children;
const length = petsChild.length;
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
let num = 1;


btnRight.onmousedown = function() {
    if (num == length - 1) {
        petsWrapper.style.transition = '0s';
        num = 0;
        let transformValue = num * -100;
        petsWrapper.style.transform = `translate(${transformValue}%)`
    }
    // if (num !== 0) {
    for (let i = 0; i < petsChild.length; i++) {
        if (i === num) { continue };
        itemFill(i);
    }
    // }

}
btnRight.onmouseup = function() {
    num++;
    // console.log(num);
    let transformValue = num * -100;
    petsWrapper.style.transform = `translate(${transformValue}%)`
    petsWrapper.style.transition = '0.8s';
    btnRight.disabled = true;
    setTimeout(function() {
        btnRight.disabled = false;
    }, 801);
    if (num === length - 1) {
        num = 0;
    }
}

btnLeft.onmousedown = function() {
    if (num == 0) {
        petsWrapper.style.transition = '0s';
        num = length - 1;
        let transformValue = num * -100;
        petsWrapper.style.transform = `translate(${transformValue}%)`
    }
    // if (num !== length - 1) {
    for (let i = 0; i < petsChild.length; i++) {
        if (i === num) { continue };
        itemFill(i);
    }
    // }
}

btnLeft.onmouseup = function() {
    num--;
    // console.log(num);
    let transformValue = num * -100;
    petsWrapper.style.transform = `translate(${transformValue}%)`
    petsWrapper.style.transition = '0.8s';
    btnLeft.disabled = true;
    setTimeout(function() {
        btnLeft.disabled = false;
    }, 801);
    if (num < 1) {
        num = length - 1;
    }
}

const itemFill = (i) => {
    let arrayOfAnimals = shuffleArray(animals, numberStartItems);

    const itemImg = petsWrapper.children[i].querySelectorAll('.item_img img');

    itemImg.forEach((item, index) => {
        item.src = arrayOfAnimals[index].image;
        item.alt = arrayOfAnimals[index].name;
    });

    const itemName = petsWrapper.children[i].querySelectorAll('.item_dscr .name');
    itemName.forEach((item, index) => {
        item.textContent = arrayOfAnimals[index].name;
    });
    const itemPlace = petsWrapper.children[i].querySelectorAll('.item_dscr .place');
    itemPlace.forEach((item, index) => {
        item.textContent = arrayOfAnimals[index].location;
    });
    const itemFood = petsWrapper.children[i].querySelectorAll('.item_dscr .food img');
    itemFood.forEach((item, index) => {
        item.src = arrayOfAnimals[index].meal;
        item.alt = arrayOfAnimals[index].meal;
    });
}

for (let i = 0; i < petsChild.length; i++) {
    itemFill(i);
}