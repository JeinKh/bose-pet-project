import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const menuBtn = document.querySelector('.open-mob-menu');
const menu = document.querySelector('.mob-menu');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('is-open');
    menuBtn.classList.toggle('is-open');

});

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const accordion = new Accordion('.accordion-container');

const firstItem = document.querySelector('.ac:first-child');

accordion.open(0);

let lastOpenedItem = firstItem;

const btnEl = document.querySelectorAll('.ac-trigger');
btnEl.forEach(element => {
    element.addEventListener('click', () => {
        const currentItem = element.closest('.ac');

        if (lastOpenedItem !== currentItem) {
            lastOpenedItem.style.backgroundColor = '';
            lastOpenedItem.style.color = '';
        }

        lastOpenedItem = currentItem;
    });
});



