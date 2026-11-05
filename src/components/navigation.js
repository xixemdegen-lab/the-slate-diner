import { mainContainer } from '../index.js';
import { generateHomePage } from '../pages/home.js';
import { generateMenuPage } from '../pages/menu.js';
import { generateAboutPage } from '../pages/about.js';
import { generateContactPage } from '../pages/contact.js';
import { generateReservePage } from '../pages/reserve.js';

const pages = {
    home: generateHomePage,
    menu: generateMenuPage,
    about: generateAboutPage,
    contact: generateContactPage,
    reserve: generateReservePage,
};

export function navigatePages() {
    const navBar = document.querySelector('.nav-bar');
    navBar.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-page-name]');
        if (!button) return;

        const page = button.dataset.pageName;
        if (!page) return;

        const createPage = pages[page];
        if (!createPage) return;
        mainContainer.replaceChildren(createPage());

        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}

export function navigateHeroCTA() {
    const heroCTA = document.querySelector('#main-container');
    heroCTA.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-hero-cta]');
        if (!button) return;

        mainContainer.replaceChildren(generateMenuPage());
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelector('.menu-btn').classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        console.log('clicked');
    });
}
