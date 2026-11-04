import arrowSrc from '../assets/images/arrow.svg';

export const generateHomePage = (container) => {
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');

    const heroSlogan = document.createElement('p');
    heroSlogan.classList.add('hero-slogan');
    heroSlogan.textContent = 'GOOD FOOD - GREATE COMPANY';

    const heroHeader = document.createElement('h1');
    heroHeader.classList.add('hero-header');
    heroHeader.textContent = 'A Dining Experience Like No Other.';

    const heroParagraph = document.createElement('p');
    heroParagraph.classList.add('hero-paragraph');
    heroParagraph.textContent = `At The Slate, we serve more than just food, we serve moments. Fresh ingredients, bold flavors, and a warm atmosphere come together for an unforgettable dining experience.`;

    const heroCTA = document.createElement('button');
    heroCTA.classList.add('hero-cta');
    heroCTA.textContent = 'Explore Our Menu';
    const arrowIcon = document.createElement('img');
    arrowIcon.src = arrowSrc;
    arrowIcon.classList.add('arrow-icon');
    heroCTA.append(arrowIcon);

    heroSection.append(heroSlogan, heroHeader, heroParagraph, heroCTA);
    //=========================================================

    const heroBody = document.createElement('div');
    heroBody.classList.add('hero-body');

    // ========================================================
    container.append(heroSection, heroBody);
};
