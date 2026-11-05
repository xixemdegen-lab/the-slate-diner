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

    // ===========================================================================
    menuBody.append(menuHeader);
    const container = document.createElement('div');
    container.append(menuBody);
    return container;
}
