import styles from './hotelCheckout.module.scss'
import cover from '../../assets/images/hero_3.jpg'
import { filterCategory } from '../../data/filterCategories'
import { Check, TrendingUp, X } from 'lucide-react'












const HotelCheckout = () => {



    return (
        <main className={ styles.checkout }>
            <section className={ styles.checkout__paymentColumn }>
                <form>
                    <article className={ styles.formControlsContainer }>

                        <h3>Who's checking in?</h3>

                        <article className={ styles.inputContainer }>
                            <input type="text" placeholder='First name' />
                        </article>


                        <article className={ styles.inputContainer }>
                            <input type="text" placeholder='Surname' />
                        </article>


                        <article className={ styles.inputContainer }>
                            <input type="text" placeholder='E-mail' />
                        </article>


                        <article className={ styles.inputContainerFlex }>
                            <div className={ styles.phoneRegionContainer }>
                                <input type="text" placeholder='Country code' className={ styles.phoneRegionInput } />
                            </div>

                            <div className={ styles.phoneNumberContainer }>
                                <input type="text" placeholder='Phone number' className={ styles.phoneNumberInput } />
                            </div>
                        </article>


                        <article className={ styles.notificationsContainer }>
                            <input type='checkbox' className={ styles.checkBox } />
                            <p>Get emails about deals, offers, and other info from Hotels.com. You can opt out anytime.</p>
                        </article>


                        <h3>Payment details</h3>

                        <article className={ styles.inputContainer }>
                            <input type="text" placeholder='Name on card' />
                        </article>


                        <article className={ styles.inputContainer }>
                            <input type="text" placeholder='Card number' />
                        </article>


                        <article className={ styles.inputContainerFlex }>
                            <div className={ styles.phoneRegionContainer }>
                                <input type="text" placeholder='Expiry date' className={ styles.phoneRegionInput } />
                            </div>

                            <div className={ styles.phoneNumberContainer }>
                                <input type="text" placeholder='Security code' className={ styles.phoneNumberInput } />
                            </div>
                        </article>


                        <article className={ styles.inputContainer }>
                            <input type="text" placeholder='Billing postcode' />
                        </article>


                        <article className={ styles.notificationsContainer }>
                            <input type='checkbox' className={ styles.checkBox } />
                            <p>Save this card for future use.</p>
                        </article>
                    </article>


                    <article className={ styles.cancellationPolicyAndInstructions }>
                        <div className={ styles.policyItem }>
                            <div className={ styles.instructionItem }>
                                <h3>Cancellation policy</h3>
                                <p className={ styles.refundableText }>Fully refundable before Wed, 24 Jun, 2026</p>
                                <p>Cancellations or changes made after 18:00 (property local time) on 24 Jun 2026 or
                                    no-shows are subject to a property fee equal to 100% of the total 
                                    amount paid for the reservation.
                                </p>
                            </div>
                        </div>

                        <div className={ styles.policyItem }>
                            <div className={ styles.instructionItem }>
                                <h3>Special check-in instructions</h3>
                                <p>
                                    Front desk staff will greet guests on arrival at the property. Information provided 
                                    by the property may be translated using automated translation tools.
                                    Guests booked in breakfast included rate plans receive breakfast for up to 2 adults 
                                    who are sharing a guestroom. Breakfast fees apply for additional guests. 
                                    Guests booked in dinner included rate plans receive dinner for up to 2 adults who 
                                    are sharing a guestroom. Dinner fees apply for additional guests.                                
                                </p>
                            </div>

                            <div className={ styles.instructionItem }>
                                <h3>Taxes and fees</h3>
                                <p>
                                    Deposit: CAD 250 per accommodation, per stay    
                                </p>                        
                            </div>
                        </div>
                    </article>


                    <article className={ styles.termsAndConditions }>
                        <p>
                            By clicking on the button below, I confirm I have read the Privacy Statement Opens 
                            in new window and Government Travel Advice Opens in new window, 
                            and have read and accept the Terms of Service Opens in new window.
                        </p>
                    </article>


                    <article className={ styles.submitBtnContainer }>
                        <button type="submit">
                            Complete booking
                        </button>
                    </article>
                </form>
            </section>



            <section className={ styles.checkout__bookingConfirmation }>
                <article className={ styles.hotelInfoSummary }>
                    <div className={ styles.coverImages }>
                        <img src={ cover } />
                    </div>

                    <div className={ styles.hotelName }>
                        <h3>Crowne Plaza Toronto Airport by IHG</h3>
                        <p>33 Carlson Court, Toronto, ON M9W 6H5</p>
                    </div>

                    <div className={ styles.hotelReviews }>
                        <p>8.2 out of 10 Very good</p>
                    </div>

                    <div className={ styles.lengthOfStay }>
                        <div className={ styles.stayInfo }>
                            <p className={ styles.stayInfoTitle }>Check-in</p>
                            <p>Wed, Jul 1, 2026</p>
                            <p>3:00pm</p>
                        </div>

                        <div className={ styles.stayInfo }>
                            <p className={ styles.stayInfoTitle }>Check-out</p>
                            <p>Wed, Jul 1, 2026</p>
                            <p>3:00pm</p>
                        </div>

                        <div className={ styles.stayInfo }>
                            <p className={ styles.stayInfoTitle }>Nights</p>
                            <p>1</p>
                        </div>
                    </div>


                    <div className={ styles.featureHighlights }>
                        <h3>Property highlights</h3>
                        <div className={ styles.highlightsContainer }>
                            {
                                filterCategory[0].options.map( feature => (
                                    <div className={ styles.featureItem }>
                                        <p>{ feature }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>


                <article className={ styles.goodTaste }>
                    <div className={ styles.tasteItem }>
                        <div className={ styles.iconContainer }>
                            <Check />
                        </div>

                        <p>You have good taste! Book now before someone else grabs it!</p>
                    </div>
                </article>


                <article className={ styles.priceDetails }>
                    <h3>Price details</h3>

                    <div className={ styles.priceItem }>
                        <p>1 night x 1 room x $115.74</p>
                        <p>$115.74</p>
                    </div>

                    <div className={ styles.priceItem }>
                        <p>Taxes & fees</p>
                        <p>$26.16</p>
                    </div>

                    <div className={ styles.priceItem }>
                        <p className={ styles.total }>Total</p>
                        <p className={ styles.total }>$26.16</p>
                    </div>

                    <div className={ styles.priceItem }>
                        <p>Rates are quoted in USD ($).</p>
                    </div>

                    <div className={ `${ styles.priceItem } ${ styles.priceIncrementWarning }` }>
                        <TrendingUp />
                        <p>This price may increase if you book later</p>
                    </div>
                </article>


                <article className={ styles.couponContainer }>
                    <div className={ styles.couponIntro }>
                        <X />
                        <p>Use a coupon or promotion code</p>
                    </div>

                    <div className={ styles.couponControls }>
                        <input type="text" placeholder='Coupon code' />
                        <button type="button">Apply</button>
                    </div>
                </article>


            </section>
        </main>
    )
}



export default HotelCheckout