import './styles/style.css';
import './styles/navbar.css';
import './styles/variables.css';
import { createNavBar } from './components/navbar.js';

const container = document.querySelector('#container');
createNavBar(container);
