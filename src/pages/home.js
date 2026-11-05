import arrowSrc from '../assets/images/arrow.svg';
import steakSrc from '../assets/images/steak.png';
import pastaSrc from '../assets/images/pasta.png';
import salmonSrc from '../assets/images/salmon.png';
import cakeSrc from '../assets/images/cake.png';

export const generateHomePage = () => {
    const homeHero = document.createElement('div');
    homeHero.classList.add('home-hero');

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
    heroCTA.dataset.heroCta = 'menu';
    const arrowIcon = document.createElement('img');
    arrowIcon.src = arrowSrc;
    arrowIcon.classList.add('arrow-icon');
    heroCTA.append(arrowIcon);

    homeHero.append(heroSlogan, heroHeader, heroParagraph, heroCTA);

    //============================================================================================== HOME BODY

    const homeBody = document.createElement('div');
    homeBody.classList.add('home-body');

    const homeBodyIntroContainer = document.createElement('div');
    homeBodyIntroContainer.classList.add('intro-container');

    const homeBodyIntro = document.createElement('p');
    homeBodyIntro.classList.add('home-body-intro');
    homeBodyIntro.textContent = 'FEATURED DISHES';
    homeBodyIntroContainer.append(homeBodyIntro);

    const homeBodyHeader = document.createElement('h2');
    homeBodyHeader.classList.add('home-body-header');
    homeBodyHeader.textContent = 'Signature Plates';

    const platesCardContainer = document.createElement('div');
    platesCardContainer.classList.add('plates-card-container');

    // ===========================================================
    const steakCard = document.createElement('div');
    steakCard.classList.add('cards');

    const steakImg = document.createElement('img');
    steakImg.src = steakSrc;

    const steakCardHeader = document.createElement('h3');
    steakCardHeader.textContent = 'Ribeye Steak';

    const steakCardPara = document.createElement('p');
    steakCardPara.textContent = 'Grilled to perfection, served with roasted potatoes and seasonal vegetables.';

    const steakCardPriceTag = document.createElement('p');
    steakCardPriceTag.textContent = '$32';
    //==============================================================

    const pastaCard = document.createElement('div');
    pastaCard.classList.add('cards');

    const pastaImg = document.createElement('img');
    pastaImg.src = pastaSrc;

    const pastaCardHeader = document.createElement('h3');
    pastaCardHeader.textContent = 'Truffle Pasta';

    const pastaCardPara = document.createElement('p');
    pastaCardPara.textContent = 'Fresh pasta tossed in a rich truffle cream sauce with parmesan and herbs.';

    const pastaCardPriceTag = document.createElement('p');
    pastaCardPriceTag.textContent = '$24';
    //==============================================================

    const salmonCard = document.createElement('div');
    salmonCard.classList.add('cards');

    const salmonImg = document.createElement('img');
    salmonImg.src = salmonSrc;

    const salmonCardHeader = document.createElement('h3');
    salmonCardHeader.textContent = 'Herb Crusted Salmon';

    const salmonCardPara = document.createElement('p');
    salmonCardPara.textContent = 'Pan-seared salmon with a herb crust, served with quinoa and seasonal greens.';

    const salmonCardPriceTag = document.createElement('p');
    salmonCardPriceTag.textContent = '$26';
    //=============================================================

    const cakeCard = document.createElement('div');
    cakeCard.classList.add('cards');

    const cakeImg = document.createElement('img');
    cakeImg.src = cakeSrc;

    const cakeCardHeader = document.createElement('h3');
    cakeCardHeader.textContent = 'Chocolate Lava Cake';

    const cakeCardPara = document.createElement('p');
    cakeCardPara.textContent = 'Warm chocolate cake with a soft center, served with vanila ice cream.';

    const cakeCardPriceTag = document.createElement('p');
    cakeCardPriceTag.textContent = '$10';
    //=============================================================

    steakCard.append(steakImg, steakCardHeader, steakCardPara, steakCardPriceTag);
    pastaCard.append(pastaImg, pastaCardHeader, pastaCardPara, pastaCardPriceTag);
    salmonCard.append(salmonImg, salmonCardHeader, salmonCardPara, salmonCardPriceTag);
    cakeCard.append(cakeImg, cakeCardHeader, cakeCardPara, cakeCardPriceTag);
    platesCardContainer.append(steakCard, pastaCard, salmonCard, cakeCard);
    homeBody.append(homeBodyIntroContainer, homeBodyHeader, platesCardContainer);
    // ========================================================

    const container = document.createElement('div');
    container.append(homeHero, homeBody);
    return container;
};
