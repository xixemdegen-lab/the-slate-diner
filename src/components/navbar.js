import logoSrc from '../assets/images/logos/white.svg';

export const createNavBar = (container) => {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const logoIcon = document.createElement('img');
    logoIcon.src = logoSrc;
    logoIcon.classList.add('logo-icon');

    const navLinks = document.createElement('nav');
    navLinks.classList.add('nav-links');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('nav-btn', 'active', 'home-btn');
    homeBtn.dataset.pageName = 'home';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('nav-btn', 'menu-btn');
    menuBtn.dataset.pageName = 'menu';

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';
    aboutBtn.classList.add('nav-btn');
    aboutBtn.dataset.pageName = 'about';

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.classList.add('nav-btn');
    contactBtn.dataset.pageName = 'contact';

    const reserveBtn = document.createElement('button');
    reserveBtn.textContent = 'Reserve a Table';
    reserveBtn.classList.add('nav-btn');
    reserveBtn.dataset.pageName = 'reserve';

    navLinks.append(homeBtn, menuBtn, aboutBtn, contactBtn, reserveBtn);

    navBar.append(logoIcon, navLinks);
    container.append(navBar);
};
