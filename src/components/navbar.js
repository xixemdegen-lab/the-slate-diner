import logoSrc from '../assets/images/logos/white.svg';

export const createNavBar = (container) => {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const logoIcon = document.createElement('img');
    logoIcon.src = logoSrc;
    logoIcon.classList.add('logo-icon');

    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('home-btn');

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('menu-btn');

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';
    aboutBtn.classList.add('about-btn');

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.classList.add('contact-btn');

    const reserveBtn = document.createElement('button');
    reserveBtn.textContent = 'Reserve a Table';
    reserveBtn.classList.add('reserve-btn');

    navLinks.append(homeBtn, menuBtn, aboutBtn, contactBtn, reserveBtn);

    navBar.append(logoIcon, navLinks);
    container.append(navBar);
};
