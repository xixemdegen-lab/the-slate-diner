import mapSrc from '../assets/images/pages-images/map.PNG';
import addressSrc from '../assets/images/page-icons/map-pin-share.svg';
import phoneSrc from '../assets/images/page-icons/phone.svg';
import emailSrc from '../assets/images/page-icons/mail-opened.svg';
import clockSrc from '../assets/images/page-icons/clock.svg';
import sentSrc from '../assets/images/pages-images/communication.png';

export function generateContactPage() {
    const content = ` <header>
                <div class="contact-hero">
                    <p class="contact-subtitle">WE'D LOVE TO HEAR FROM YOU</p>
                    <h1 class="contact-title">Get in Touch</h1>
                    <p class="contact-description">Questions, private events or feedbacks? Send us a message and we will get back to you.</p>
                </div>
            </header>

            <main>
                <div class="contact-form">
                    <section class="form">
                        <form action="#" method="post" class="the-form">
                            <h2>Send us a message</h2>
                            <fieldset>
                                <div class="input-group">
                                    <label for="full-name">Full name</label>
                                    <input type="text" name="fullname" id="full-name" required placeholder="Your name" />
                                </div>

                                <div class="input-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required placeholder="you@example.com" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <div class="input-group">
                                    <label for="enquiries">Topic</label>
                                    <select class="enq-selection" name="enquiries" id="enquiries" required>
                                        <option value="">Select a topic</option>
                                        <option value="general">General Enquiry</option>
                                        <option value="reservation">Table Reservation</option>
                                        <option value="menu">Menu & Food Enquiry</option>
                                        <option value="event">Private Events & Celebrations</option>
                                        <option value="catering">Catering Services</option>
                                        <option value="feedback">Feedback & Suggestions</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="partnership">Business Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div class="input-group">
                                    <label for="message">Message</label>
                                    <textarea name="message" id="message" required placeholder="How can we help?" rows="6"></textarea>
                                </div>
                            </fieldset>

                            <button data-form-btn="submit" class="contact-send-btn">Send Message</button>
                        </form>
                    </section>

                    <section class="address-map">
                        <div class="address-container">
                            <div class="address infos">
                                <img src="${addressSrc}" alt="address icon." />
                                <div class="content">
                                    <p class="title">ADDRESS</p>
                                    <p class="details">Street Address, City, State, Postcode</p>
                                </div>
                            </div>

                            <div class="phone infos">
                                <img src="${phoneSrc}" alt="Phone icon." />
                                <div class="content">
                                    <p class="title">PHONE</p>
                                    <p class="details">+234-567-8913-42</p>
                                </div>
                            </div>

                            <div class="email infos">
                                <img src="${emailSrc}" alt="email icon" />
                                <div class="content">
                                    <p class="title">EMAIL</p>
                                    <p class="details">support@theslate.com</p>
                                </div>
                            </div>

                            <div class="clock infos">
                                <img src="${clockSrc}" alt="clock icon." />
                                <div class="content">
                                    <p class="title">OPENING HOURS</p>
                                    <p class="details">mon-Thu - [ 8am - 6pm ]</p>
                                    <p class="details">fri-sat - [ 10am - 5pm ]</p>
                                    <p class="details">sunday - [ closed ]</p>
                                </div>
                            </div>
                        </div>

                        <div class="map">
                            <img src="${mapSrc}" alt="map to the slate diner"/>
                        </div>
                    </section>
                </div>

                <div class="feedback-overlay">
                    <div class="feedback-screen">
                        <div class="feedback-heading">
                            <h2 class="feedback-title">Thank You!</h2>
                            <p class="feedback-subtitle">for choosing us</p>
                        </div>

                        <img src="${sentSrc}" alt="image" />

                        <p class="feedback-desc">
                            Your submission has been recieved. <br />
                            We will be in touch and contact you soon!
                        </p>

                        <button data-nav-to="home">Go to Home</button>
                    </div>
                </div>
            </main>`;

    const container = document.createElement('div');
    container.classList.add('contact-body');
    container.innerHTML = content;

    const form = container.querySelector('.the-form');
    const feedbackScreen = container.querySelector('.feedback-overlay');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        feedbackScreen.style.display = 'flex';
        container.querySelectorAll('input, select, textarea').forEach((element) => {
            element.value = '';
        });
    });

    return container;
}
