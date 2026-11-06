import aboutIngredientsSrc from '../assets/images/pages-images/about-ingredients.JPG';

export function generateAboutPage() {
    const content = `
       <header>
                <div class="about-hero">
                    <p class="abt-subtitle">OUR STORY</p>
                    <h1 class="abt-title">We serve more than food. We serve moments.</h1>
                    <p class="abt-description">
                        The Slate is a place to slow down. Fresh ingredients, bold flavors and a warm atmosphere come together so every visit feels
                        like an occasion, whether it is a quiet dinner for two or a long table of friends.
                    </p>
                    <button data-abt-hero-cta="reserve">Reserve a Table</button>
                </div>
            </header>
            <main>
                <section class="from-our-kitchen">
                    <div>
                        <img src="${aboutIngredientsSrc}" />
                    </div>

                    <div>
                        <div class="sec-subtitle">
                            <p>FROM OUR KITCHEN</p>
                        </div>
                        <h2 class="sec-title">Honest cooking, done with care</h2>
                        <p class="sec-description">
                            Everything on our menu starts with ingrdients we trust: ripe produce, quality cuts and fresh herbs. We keep dishes focused
                            so the flavors can speak for themselves.
                        </p>
                    </div>
                </section>

                <section class="our-believe">
                    <div class="sec-subtitle item-two">
                        <p>WHAT WE BELIEVE</p>
                    </div>

                    <h2 class="sec-title">Honest cooking, done with care</h2>

                    <div class="believes">
                        <div>
                            <p>01</p>
                            <h3>Fresh ingredients</h3>
                            <p>Seasonal produce and carefully chosen protiens, prepared to order.</p>
                        </div>

                        <div>
                            <p>02</p>
                            <h3>Bold flavors</h3>
                            <p>Truffle, herbs, char and citrus. Big taste, balanced on the plate.</p>
                        </div>

                        <div>
                            <p>03</p>
                            <h3>Warm atmosphere</h3>
                            <p>Candlelight, dark wood and friendly service that makes you want to stay.</p>
                        </div>
                    </div>
                </section>

                <section class="cta-section">
                    <p>GOOD FOOD . GOOD COMPANY</p>
                    <h2>Come hungry. Leave happy</h2>
                    <p>Browse the menu or save your table for tonight.</p>
                    <div>
                        <button data-cta-section="reserve">Reserve a Table</button>
                        <button data-cta-section="menu">Explore Our Menu</button>
                    </div>
                </section>
            </main>
        </div>
    `;

    const container = document.createElement('div');
    container.classList.add('about-body');
    container.innerHTML = content;

    return container;
}
