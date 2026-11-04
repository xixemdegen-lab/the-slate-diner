import { createNavBar } from './components/navbar.js';
import { generateHomePage } from './components/home.js';
import { createFooter } from './components/footer.js';
import './styles/style.css';
import './styles/navbar.css';
import './styles/variables.css';
import './styles/home.css';
import './styles/footer.css';

const navContainer = document.querySelector('.nav-container');
const mainContainer = document.querySelector('#main-container');
const footerContainer = document.querySelector('.footer-container');

createNavBar(navContainer);
generateHomePage(mainContainer);
createFooter(footerContainer);
