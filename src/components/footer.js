import logoSrc from '../assets/images/logos/gold.svg';

export function createFooter(container) {
    const logoIcon = document.createElement('img');
    logoIcon.src = logoSrc;
    logoIcon.classList.add('logo-icon');

    const sloganContainer = document.createElement('div');
    sloganContainer.classList.add('ft-content-container');
    const slogan = document.createElement('p');
    slogan.textContent = `Good food. Great Company. Always.`;
    sloganContainer.append(slogan);

    const copyrightContainer = document.createElement('div');
    copyrightContainer.classList.add('ft-content-container');
    const copyright = document.createElement('p');
    copyright.textContent = `\u00A9 The Slate Diner. All rights reserved.`;
    copyrightContainer.append(copyright);

    container.append(logoIcon, sloganContainer, copyrightContainer);
}
