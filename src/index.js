import { createNavBar } from './components/navbar.js';
import { generateHomePage } from './pages/home.js';
import { createFooter } from './components/footer.js';
import { navigatePages } from './components/navigation.js';
import { navigateHeroCTA } from './components/navigation.js';
import './style.css';
import './styles/navbar.css';
import './styles/variables.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/menu.css';
import './styles/about.css';
import './styles/contact.css';
import './styles/reserve.css';

const navContainer = document.querySelector('.nav-container');
export const mainContainer = document.querySelector('#main-container');
const footerContainer = document.querySelector('.footer-container');

createNavBar(navContainer);
createFooter(footerContainer);
mainContainer.append(generateHomePage());
navigatePages();
navigateHeroCTA();
