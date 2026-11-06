import burrataSrc from '../assets/images/pages-images/burrata-heirloom.JPG';
import calamariSrc from '../assets/images/pages-images/crispy-calamari.JPG';
import scallopsSrc from '../assets/images/pages-images/seared-scallops.JPG';

export function generateMenuPage() {
    const menuBody = document.createElement('div');
    menuBody.classList.add('menu-body');

    const menuHero = document.createElement('div');
    menuHero.classList.add('menu-hero');

    const menuHeroSubtitle = document.createElement('p');
    menuHeroSubtitle.textContent = 'WHAT WE SERVE';

    const menuHeroTitle = document.createElement('h1');
    menuHeroTitle.textContent = 'Our Menu';

    const menuHeroDescription = document.createElement('p');
    menuHeroDescription.textContent =
        'Fresh ingredients and bold flavors, prepared to order. Something for every table, from first bite to the last spoonful.';

    menuHero.append(menuHeroSubtitle, menuHeroTitle, menuHeroDescription);

    const heroNav = document.createElement('nav');
    heroNav.classList.add('hero-nav');

    const startersNavList = document.createElement('li');
    startersNavList.classList.add('nav-list');
    const startersNavLink = document.createElement('a');
    startersNavLink.classList.add('menu-nav-link', 'active');
    startersNavLink.setAttribute('href', '#starters');
    startersNavLink.textContent = 'STARTERS';
    startersNavList.append(startersNavLink);

    const mainsNavList = document.createElement('li');
    mainsNavList.classList.add('nav-list');
    const mainsNavLink = document.createElement('a');
    mainsNavLink.classList.add('menu-nav-link');
    mainsNavLink.setAttribute('href', '#mains');
    mainsNavLink.textContent = 'MAINS';
    mainsNavList.append(mainsNavLink);

    const dessertsNavList = document.createElement('li');
    dessertsNavList.classList.add('nav-list');
    const dessertsNavLink = document.createElement('a');
    dessertsNavLink.classList.add('menu-nav-link');
    dessertsNavLink.setAttribute('href', '#desserts');
    dessertsNavLink.textContent = 'DESSERTS';
    dessertsNavList.append(dessertsNavLink);

    heroNav.append(startersNavList, mainsNavList, dessertsNavList);
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.append(menuHero, heroNav);

    heroNav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        const navLinks = document.querySelectorAll('.menu-nav-link');
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        link.classList.add('active');
    });

    // ===========================================================================

    const menuMain = document.createElement('div');
    menuMain.classList.add('menu-main');

    // ===========================================================================
    const startersSection = document.createElement('section');
    startersSection.classList.add('sections');
    startersSection.setAttribute('id', 'starters');

    const startersSubTitleContainer = document.createElement('div');
    startersSubTitleContainer.classList.add('subtitle');
    const startersSubTitle = document.createElement('p');
    startersSubTitle.textContent = 'TO BEGIN';
    startersSubTitleContainer.append(startersSubTitle);

    const startersTitle = document.createElement('h2');
    startersTitle.classList.add('starters-title');
    startersTitle.textContent = 'Starters';

    const startersCardContainer = document.createElement('div');
    startersCardContainer.classList.add('dish-card-container');

    const burrataCard = document.createElement('div');
    burrataCard.classList.add('dish-cards');

    const burrataImg = document.createElement('img');
    burrataImg.src = burrataSrc;

    const burrataTitleAndPriceContainer = document.createElement('div');
    burrataTitleAndPriceContainer.classList.add('title-price');

    const burrataTitle = document.createElement('h3');
    burrataTitle.textContent = 'Burrata & Heirloom Tomato';
    const burrataPrice = document.createElement('p');
    burrataPrice.textContent = '$14';
    burrataTitleAndPriceContainer.append(burrataTitle, burrataPrice);
    const burrataDescription = document.createElement('p');
    burrataDescription.textContent = 'Creamy burrata with ripe heirloom tomatoes, fresh basil, olive oil and baisamic drizzle.';

    burrataCard.append(burrataImg, burrataTitleAndPriceContainer, burrataDescription);

    // =========================================================================

    const calamariCard = document.createElement('div');
    calamariCard.classList.add('dish-cards');

    const calamariImg = document.createElement('img');
    calamariImg.src = calamariSrc;

    const calamariTitleAndPriceContainer = document.createElement('div');
    calamariTitleAndPriceContainer.classList.add('title-price');

    const calamariTitle = document.createElement('h3');
    calamariTitle.textContent = 'Crispy Calamari';
    const calamariPrice = document.createElement('p');
    calamariPrice.textContent = '$12';
    calamariTitleAndPriceContainer.append(calamariTitle, calamariPrice);
    const calamariDescription = document.createElement('p');
    calamariDescription.textContent = 'Lightly fried calamari with lemon,fresh parsley and a garlic aioli for dipping.';

    calamariCard.append(calamariImg, calamariTitleAndPriceContainer, calamariDescription);

    // =========================================================================

    const scallopsCard = document.createElement('div');
    scallopsCard.classList.add('dish-cards');

    const scallopsImg = document.createElement('img');
    scallopsImg.src = scallopsSrc;

    const scallopsTitleAndPriceContainer = document.createElement('div');
    scallopsTitleAndPriceContainer.classList.add('title-price');

    const scallopsTitle = document.createElement('h3');
    scallopsTitle.textContent = 'Seared Scallops';
    const scallopsPrice = document.createElement('p');
    scallopsPrice.textContent = '$18';
    scallopsTitleAndPriceContainer.append(scallopsTitle, scallopsPrice);
    const scallopsDescription = document.createElement('p');
    scallopsDescription.textContent = 'Golden pan-seared scallops on sweet pea purée with crisp pancetta and microgreens.';

    scallopsCard.append(scallopsImg, scallopsTitleAndPriceContainer, scallopsDescription);

    // ====================================================================
    startersCardContainer.append(burrataCard, calamariCard, scallopsCard);
    startersSection.append(startersSubTitleContainer, startersTitle, startersCardContainer);

    // ===========================================================================
    menuMain.append(startersSection);
    menuBody.append(menuHeader, menuMain);
    const container = document.createElement('div');
    container.append(menuBody);

    console.log('Still running');

    return container;
}
