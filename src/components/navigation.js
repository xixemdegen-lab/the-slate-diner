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

    // ==================================================================

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
    });

    // =================================================================

    const menuFtCTA = document.querySelector('#main-container');
    menuFtCTA.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-menu-cta]');
        if (!button) return;

        mainContainer.replaceChildren(generateReservePage());
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach((btn) => {
            btn.classList.remove('active');
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const abtHeroCTA = document.querySelector('#main-container');
    abtHeroCTA.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-abt-hero-cta]');
        if (!button) return;

        mainContainer.replaceChildren(generateReservePage());
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach((btn) => {
            btn.classList.remove('active');
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const abtCTASection = document.querySelector('#main-container');
    abtCTASection.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-cta-section]');
        if (!button) return;

        switch (button.dataset.ctaSection) {
            case 'reserve':
                mainContainer.replaceChildren(generateReservePage());
                const navBtns = document.querySelectorAll('.nav-btn');
                navBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                break;

            case 'menu':
                mainContainer.replaceChildren(generateMenuPage());
                const naviBtns = document.querySelectorAll('.nav-btn');
                naviBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                document.querySelector('.menu-btn').classList.add('active');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                break;
        }
    });

    const feedbackBtn = document.querySelector('#main-container');

    feedbackBtn.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-nav-to]');
        if (!button) return;

        mainContainer.replaceChildren(generateHomePage());
        document.querySelectorAll('.nav-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelector('.home-btn').classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const reservePopupBtn = document.querySelector('#main-container');

    reservePopupBtn.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-reserve-popup]');
        if (!button) return;

        mainContainer.replaceChildren(generateHomePage());
        document.querySelectorAll('.nav-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelector('.home-btn').classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}
