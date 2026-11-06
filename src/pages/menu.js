import burrataSrc from '../assets/images/pages-images/burrata-heirloom.JPG';
import calamariSrc from '../assets/images/pages-images/crispy-calamari.JPG';
import scallopsSrc from '../assets/images/pages-images/seared-scallops.JPG';
import ribeyeSrc from '../assets/images/pages-images/ribeye-steak.JPG';
import pastaSrc from '../assets/images/pages-images/truffle-pasta.JPG';
import salmonSrc from '../assets/images/pages-images/crusted-salmon.JPG';
import chickenSrc from '../assets/images/pages-images/roast-chicken.JPG';
import mushroomSrc from '../assets/images/pages-images/mushroom-risotto.JPG';
import cakeSrc from '../assets/images/pages-images/chocolate-lava-cake.JPG';
import cremeBruleeSrc from '../assets/images/pages-images/creme-brulee.JPG';
import tiramisuSrc from '../assets/images/pages-images/tiramisu.JPG';

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
    startersTitle.classList.add('title');
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

    // ====================================================================
    // ====================================================================
    // ====================================================================
    // ====================================================================

    const mainsSection = document.createElement('section');
    mainsSection.classList.add('sections');
    mainsSection.setAttribute('id', 'mains');

    const mainsSubTitleContainer = document.createElement('div');
    mainsSubTitleContainer.classList.add('subtitle');
    const mainsSubTitle = document.createElement('p');
    mainsSubTitle.textContent = 'THE MAIN EVENT';
    mainsSubTitleContainer.append(mainsSubTitle);

    const mainsTitle = document.createElement('h2');
    mainsTitle.classList.add('title');
    mainsTitle.textContent = 'Mains';

    const mainsCardContainer = document.createElement('div');
    mainsCardContainer.classList.add('dish-card-container');

    const ribeyeCard = document.createElement('div');
    ribeyeCard.classList.add('dish-cards');

    const ribeyeImg = document.createElement('img');
    ribeyeImg.src = ribeyeSrc;

    const ribeyeTitleAndPriceContainer = document.createElement('div');
    ribeyeTitleAndPriceContainer.classList.add('title-price');

    const ribeyeTitle = document.createElement('h3');
    ribeyeTitle.textContent = 'Ribeye Steak';
    const ribeyePrice = document.createElement('p');
    ribeyePrice.textContent = '$32';
    ribeyeTitleAndPriceContainer.append(ribeyeTitle, ribeyePrice);
    const ribeyeDescription = document.createElement('p');
    ribeyeDescription.textContent = 'Grilled to perfection, served with roasted potatoes and seasonnal vegetables.';

    ribeyeCard.append(ribeyeImg, ribeyeTitleAndPriceContainer, ribeyeDescription);

    // =========================================================================

    const pastaCard = document.createElement('div');
    pastaCard.classList.add('dish-cards');

    const pastaImg = document.createElement('img');
    pastaImg.src = pastaSrc;

    const pastaTitleAndPriceContainer = document.createElement('div');
    pastaTitleAndPriceContainer.classList.add('title-price');

    const pastaTitle = document.createElement('h3');
    pastaTitle.textContent = 'Truffle Pasta';
    const pastaPrice = document.createElement('p');
    pastaPrice.textContent = '$24';
    pastaTitleAndPriceContainer.append(pastaTitle, pastaPrice);
    const pastaDescription = document.createElement('p');
    pastaDescription.textContent = 'Fresh pasta tossed in a rich truffle cream sauce with parmesan and herbs.';

    pastaCard.append(pastaImg, pastaTitleAndPriceContainer, pastaDescription);

    // =========================================================================

    const salmonCard = document.createElement('div');
    salmonCard.classList.add('dish-cards');

    const salmonImg = document.createElement('img');
    salmonImg.src = salmonSrc;

    const salmonTitleAndPriceContainer = document.createElement('div');
    salmonTitleAndPriceContainer.classList.add('title-price');

    const salmonTitle = document.createElement('h3');
    salmonTitle.textContent = 'Herb Crusted Salmon';
    const salmonPrice = document.createElement('p');
    salmonPrice.textContent = '$26';
    salmonTitleAndPriceContainer.append(salmonTitle, salmonPrice);
    const salmonDescription = document.createElement('p');
    salmonDescription.textContent = 'pan-seared salmon with a herb crust, served with quinoa and seasonal greens.';

    salmonCard.append(salmonImg, salmonTitleAndPriceContainer, salmonDescription);

    // =========================================================================

    const chickenCard = document.createElement('div');
    chickenCard.classList.add('dish-cards');

    const chickenImg = document.createElement('img');
    chickenImg.src = chickenSrc;

    const chickenTitleAndPriceContainer = document.createElement('div');
    chickenTitleAndPriceContainer.classList.add('title-price');

    const chickenTitle = document.createElement('h3');
    chickenTitle.textContent = 'Roast Chicken';
    const chickenPrice = document.createElement('p');
    chickenPrice.textContent = '$22';
    chickenTitleAndPriceContainer.append(chickenTitle, chickenPrice);
    const chickenDescription = document.createElement('p');
    chickenDescription.textContent = 'Crisp-skinned roast chicken with thyme, buttered potatoes and glazed carrots.';

    chickenCard.append(chickenImg, chickenTitleAndPriceContainer, chickenDescription);

    // =========================================================================

    const mushroomCard = document.createElement('div');
    mushroomCard.classList.add('dish-cards');

    const mushroomImg = document.createElement('img');
    mushroomImg.src = mushroomSrc;

    const mushroomTitleAndPriceContainer = document.createElement('div');
    mushroomTitleAndPriceContainer.classList.add('title-price');

    const mushroomTitle = document.createElement('h3');
    mushroomTitle.textContent = 'Mushroom Risotto';
    const mushroomPrice = document.createElement('p');
    mushroomPrice.textContent = '$21';
    mushroomTitleAndPriceContainer.append(mushroomTitle, mushroomPrice);
    const mushroomDescription = document.createElement('p');
    mushroomDescription.textContent = 'Slow-stirred arborio rice with wild mushrooms, parmesan, chives and a touch of truffle.';

    mushroomCard.append(mushroomImg, mushroomTitleAndPriceContainer, mushroomDescription);

    // ====================================================================
    mainsCardContainer.append(ribeyeCard, pastaCard, salmonCard, chickenCard, mushroomCard);
    mainsSection.append(mainsSubTitleContainer, mainsTitle, mainsCardContainer);

    // ====================================================================
    // ====================================================================
    // ====================================================================
    // ====================================================================

    const dessertsSection = document.createElement('section');
    dessertsSection.classList.add('sections');
    dessertsSection.setAttribute('id', 'desserts');

    const dessertsSubTitleContainer = document.createElement('div');
    dessertsSubTitleContainer.classList.add('subtitle');
    const dessertsSubTitle = document.createElement('p');
    dessertsSubTitle.textContent = 'TO FINISH';
    dessertsSubTitleContainer.append(dessertsSubTitle);

    const dessertsTitle = document.createElement('h2');
    dessertsTitle.classList.add('title');
    dessertsTitle.textContent = 'Desserts';

    const dessertsCardContainer = document.createElement('div');
    dessertsCardContainer.classList.add('dish-card-container');

    // =====================================================================

    const cakeCard = document.createElement('div');
    cakeCard.classList.add('dish-cards');

    const cakeImg = document.createElement('img');
    cakeImg.src = cakeSrc;

    const cakeTitleAndPriceContainer = document.createElement('div');
    cakeTitleAndPriceContainer.classList.add('title-price');

    const cakeTitle = document.createElement('h3');
    cakeTitle.textContent = 'Chocolate Lava Cake';
    const cakePrice = document.createElement('p');
    cakePrice.textContent = '$10';
    cakeTitleAndPriceContainer.append(cakeTitle, cakePrice);
    const cakeDescription = document.createElement('p');
    cakeDescription.textContent = 'Warm chocolate cake with a soft center, served with vanilla ice cream';

    cakeCard.append(cakeImg, cakeTitleAndPriceContainer, cakeDescription);

    // =========================================================================

    const cremeBruleeCard = document.createElement('div');
    cremeBruleeCard.classList.add('dish-cards');

    const cremeBruleeImg = document.createElement('img');
    cremeBruleeImg.src = cremeBruleeSrc;

    const cremeBruleeTitleAndPriceContainer = document.createElement('div');
    cremeBruleeTitleAndPriceContainer.classList.add('title-price');

    const cremeBruleeTitle = document.createElement('h3');
    cremeBruleeTitle.textContent = 'Crème Brûlée';
    const cremeBruleePrice = document.createElement('p');
    cremeBruleePrice.textContent = '$9';
    cremeBruleeTitleAndPriceContainer.append(cremeBruleeTitle, cremeBruleePrice);
    const cremeBruleeDescription = document.createElement('p');
    cremeBruleeDescription.textContent = 'Silky vanilla custard under a caremelized sugar crust, finished with fresh berries.';

    cremeBruleeCard.append(cremeBruleeImg, cremeBruleeTitleAndPriceContainer, cremeBruleeDescription);

    // =========================================================================

    const tiramisuCard = document.createElement('div');
    tiramisuCard.classList.add('dish-cards');

    const tiramisuImg = document.createElement('img');
    tiramisuImg.src = tiramisuSrc;

    const tiramisuTitleAndPriceContainer = document.createElement('div');
    tiramisuTitleAndPriceContainer.classList.add('title-price');

    const tiramisuTitle = document.createElement('h3');
    tiramisuTitle.textContent = 'Tiramisu';
    const tiramisuPrice = document.createElement('p');
    tiramisuPrice.textContent = '$9';
    tiramisuTitleAndPriceContainer.append(tiramisuTitle, tiramisuPrice);
    const tiramisuDescription = document.createElement('p');
    tiramisuDescription.textContent = 'Expresso-soaked layers with mascarpone cream and a dusting of dark cocoa.';

    tiramisuCard.append(tiramisuImg, tiramisuTitleAndPriceContainer, tiramisuDescription);

    // ====================================================================
    dessertsCardContainer.append(cakeCard, cremeBruleeCard, tiramisuCard);
    dessertsSection.append(dessertsSubTitleContainer, dessertsTitle, dessertsCardContainer);
    // ===========================================================================
    // ===========================================================================
    // ===========================================================================
    // ===========================================================================

    const menuFooterCTA = document.createElement('div');
    // ===========================================================================
    menuMain.append(startersSection, mainsSection, dessertsSection);
    menuBody.append(menuHeader, menuMain);
    const container = document.createElement('div');
    container.append(menuBody);

    console.log('Still running');

    return container;
}
