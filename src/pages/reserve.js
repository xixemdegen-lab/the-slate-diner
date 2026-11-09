import reserveImgSrc from '../assets/images/pages-images/reserve-img.JPG';
export function generateReservePage() {
    const content = ` <header>
                <div class="reserve-hero">
                    <div class="reserve-subtitle">
                        <p>BOOK YOUR EVENING</p>
                    </div>

                    <h1 class="reserve-title">Reserve a Table</h1>
                    <p class="reserve-desc">Tell us when you would like to dine and we will have a table waiting.</p>
                </div>
            </header>

            <main>
                <div class="reserve-form-container">
                    <section class="form-sect">
                        <form action="#" method="post" class="reserve-form">
                            <fieldset>
                                <legend>Personal Information</legend>

                                <div class="input-group">
                                    <label for="fullname">Full name </label>
                                    <input type="text" id="fullname" name="fullname" required placeholder="Your name" />
                                </div>

                                <div class="input-group">
                                    <label for="phone">Phone </label>
                                    <input type="tel" id="phone" name="phone" required placeholder="+234 5678 911 0" pattern="[0-9]+"/>
                                </div>

                                <div class="input-group">
                                    <label for="email">Email </label>
                                    <input type="email" id="email" name="email" required placeholder="you@example.com" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Reservation Details</legend>

                                <div class="info-group-ctnr">
                                    <div class="input-group">
                                        <label for="date">Date </label>
                                        <input type="date" id="date" name="date" required />
                                    </div>

                                    <div class="input-group">
                                        <label for="time">Time </label>
                                        <input type="time" id="time" name="time" required />
                                    </div>

                                    <div class="input-group">
                                        <label for="guests">Guests</label>
                                        <input type="number" id="guests" name="guest" required />
                                    </div>
                                </div>

                                <div class="input-group">
                                    <label for="occasion">Occasion (optional)</label>
                                    <select id="occasion" name="occasion">
                                        <option value="casual-dining" selceted>Casual Dining</option>
                                        <option value="birthday">Birthday Celebration</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="date-night">Date Night</option>
                                        <option value="business-meeting">Business Meeting</option>
                                        <option value="family-gathering">Family Gathering</option>
                                        <option value="romantic-dinner">Romantic Dinner</option>
                                        <option value="graduation">Graduation Celebration</option>
                                        <option value="engagement">Engagement Celebration</option>
                                        <option value="wedding">Wedding Celebration</option>
                                        <option value="holiday">Holiday Celebration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div class="input-group">
                                    <label for="requests">Special request (optional)</label>
                                    <textarea
                                        id="requests"
                                        name="requests"
                                        placeholder="Allergies, seating prefrences, celebrations..."
                                        rows="6"
                                    ></textarea>
                                </div>
                            </fieldset>

                            <button data-reserve="confrimation" class="reserve-btn">Confirm Reservation</button>
                            <p>You will recieve a confirmation by email once your table is booked.</p>
                        </form>
                    </section>

                    <section class="tips-sect">
                        <div class="tips-sect-container">
                            <div class="top">
                                <div class="img-container">
                                <img src="${reserveImgSrc}" />
                                </div>
                                <div class="top-title-container">
                                    <h2>A dining experience like no other</h2>
                                    <p>GOOD FOOD . GREAT COMPANY</p>
                                </div>
                            </div>

                            <div class="bottom">
                                <p class="bottom-title">GOOD TO KNOW</p>

                                <div class="to-know">
                                    <p>parties of 8 or more: please call [+234 5678 910 76]</p>
                                </div>

                                <div class="to-know">
                                    <p>Tables are held for [15] minutes after your booking time.</p>
                                </div>

                                <div class="to-know">
                                    <p>Need to change plans? Contact us at least [24 hours] ahead.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="reserve-confirmation">
                    <div class="conf-screen">
                        <div class="outer-circle">
                            <div class="inner-circle">
                                <p>@</p>
                            </div>
                        </div>

                        <h2 class="reserve-confirm-title">Success! Your reservation is beign processed.</h2>

                        <p class="reserve-confirm-subtitle">Please check your email for confirmation and further instructions about the event.</p>

                        <div class="reserve-details-container">
                            <div class="detail-group">
                                <p class="detail-title">Full name</p>
                                <p class="detail-info full-name"></p>
                            </div>

                            <div class="detail-group">
                                <p class="detail-title">Email</p>
                                <p class="detail-info email"></p>
                            </div>

                            <div class="detail-group">
                                <p class="detail-title">Phone</p>
                                <p class="detail-info phone"></p>
                            </div>

                            <div class="detail-group">
                                <p class="detail-title">Time</p>
                                <p class="detail-info time"></p>
                            </div>

                            <div class="detail-group">
                                <p class="detail-title">Date</p>
                                <p class="detail-info date"></p>
                            </div>

                            <div class="detail-group">
                                <p class="detail-title">Guest(s)</p>
                                <p class="detail-info guest"></p>
                            </div>

                            <div class="detail-group">
                                <p class="detail-title">Occasion</p>
                                <p class="detail-info occasion"></p>
                            </div>
                        </div>
                        <button data-reserve-popup="reserve" class="reserve-popup">Back to Home</button>
                    </div>
                </div>
            </main>`;

    const container = document.createElement('div');
    container.classList.add('reserve-body');
    container.innerHTML = content;

    const form = container.querySelector('.reserve-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        container.querySelector('.reserve-confirmation').style.display = 'flex';

        const summaryEl = [...container.querySelectorAll('.full-name, .email,  .phone, .time, .date, .guest, .occasion')];

        const formValues = ['fullname', 'email', 'phone', 'time', 'date', 'guest', 'occasion'].map((value) => {
            const field = form.elements.namedItem(value);
            return field.tagName === 'SELECT' ? field.selectedOptions[0].textContent : formData.get(value);
        });

        summaryEl.forEach((el, index) => {
            el.textContent = formValues[index];
        });
    });
    return container;
}
