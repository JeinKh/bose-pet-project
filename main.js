import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const closeMenuLink = document.querySelectorAll('.header-mob-menu-link');

    const toggleMenu = () => {
    const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    };
    closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    });
})();

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const accordion = new Accordion('.accordion-container');

const firstItem = document.querySelector('.ac:first-child');

// firstItem.style.backgroundColor = '#191919';
// firstItem.style.color = '#e7e7e7';

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

        // currentItem.style.backgroundColor = '#191919';
        // currentItem.style.color = '#e7e7e7'; 

        lastOpenedItem = currentItem;
    });
});



