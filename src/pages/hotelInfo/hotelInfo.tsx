import styles from './hotelInfo.module.scss'
import ReservationForm from '../../components/reservationForm/reservationForm'
import { MapPin, CircleSmall, Info } from 'lucide-react'
import cover1 from '../../assets/images/hero_2.jpg'
import { paymentOptions } from '../../data/paymentOptions'
import ReviewCard from '../../components/reviewCard/reviewCard'
import ReviewSummary from '../../components/reviewSummary/reviewSummary'










const HotelInfo = () => {




    return (
        <main className={ styles.hotelInfo }>
            <section className={ styles.hotelInfo__reservationForm }>
                <ReservationForm />
            </section>


            <section className={ styles.hotelInfo__nameAndLocation }>
                <h3>Atlantis Suites The Entertainment District - Toronto</h3>
                <div className={ styles.locationDisplay }>
                    <MapPin size={ 20 } />
                    <div className={ styles.nameAndLocationContainer }>
                        <p>Akosombo Lakeside Road</p>
                        <p>Akosombo, Ghana.</p>
                    </div>
                </div>
            </section>


            <section className={ styles.hotelInfo__picturesDisplayGrid }>
                <img src={ cover1 } />
                <img src={ cover1 } />
                <img src={ cover1 } />
                <img src={ cover1 } />
                <img src={ cover1 } />
                <img src={ cover1 } />
            </section>


            <section className={ styles.hotelInfo__headingList }>
                <p>Overview</p>
                <p>Description</p>
                <p>Amenities</p>
                <p>Policies</p>
                <p>Pricing</p>
                <p>Accepted Payment Methods</p>
                <p>Reviews</p>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Description</h3>
                <p>
                    Volta River Luxury Resort combines modern comfort with the natural beauty of the Volta Region. 
                    Guests can enjoy spacious rooms, riverfront dining, water activities, conference facilities, and 
                    exceptional hospitality. Whether you're traveling for business or leisure, the resort offers a peaceful 
                    escape with premium amenities.  
                    Volta River Luxury Resort combines modern comfort with the natural beauty of the Volta Region. 
                    Guests can enjoy spacious rooms, riverfront dining, water activities, conference facilities, and 
                    exceptional hospitality. Whether you're traveling for business or leisure, the resort offers a peaceful 
                    escape with premium amenities.                
                </p>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Amenities</h3>
                
                <div className={ styles.amenitiesGrid }>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Swimming Pool</p>
                    </div>

                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Free wifi</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Restaurant</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Spa</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Fitness Center</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Conference Room</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Airport Shuttle</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Free Parking</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Gym</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Pool</p>
                    </div>
                    <div className={ styles.amenityItem }>
                        <CircleSmall />
                        <p>Free Parking</p>
                    </div>
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Policies & House Rules</h3>
                <p>Atlantis Suites The Entertainment District - Toronto takes special requests – add in the next step!</p>
                <div className={ styles.houseRulesContainer }>
                    <ul>
                        <li>
                            <Info /> 
                            No smoking indoors
                        </li>

                        <li>
                            <Info />                             
                            Valid ID required at check-in
                        </li>

                        <li>
                            <Info />                             
                            Pets not allowed
                        </li>

                        <li>
                            <Info />                             
                            No parties or events
                        </li>
                    </ul>
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Accepted Payment options</h3>

                <div className={ styles.paymentOptionsDisplay }>
                    {
                        paymentOptions.map( option => (
                            <img src={ option.src } alt={ option.name } />
                        ))
                    }
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Pricing</h3>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Guest Reviews</h3>

                <div className={ styles.reviewsInfo }>
                    <ReviewSummary />
                </div>

                <p className={ styles.topRatedText }>Top-rated guest experiences</p>

                <div className={ styles.reviewsDisplay }>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>

                <button className={ styles.readAllReviewsBtn }>Read all reviews</button>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>The fine print</h3>
                <p>Must-know information for guests at this property</p>

                <div className={ styles.finePrintContainer }>
                    <p>
                        Each suite is individually styled; therefore, interior colours, finishes, flooring, layouts, and views may vary from the images displayed. 
                        All suites are maintained to a consistent luxury standard; however, exact design details and views are subject to availability.
                        Please note that a late check-in fee of $75 applies for arrivals between 11:15 PM and 1:00 AM.
                        All requests for early check-in or late check-out are subject to property approval and must be submitted at least 24 hours prior to arrival.
                        Guests are required to present a valid photo ID and credit card upon check-in. Please note that all Special Requests are subject to availability and may incur additional charges.
                        Please inform Atlantis Suites The Entertainment District - Toronto of your expected arrival time in advance. You can use the Special Requests box when booking, or contact the property directly using the contact details in your confirmation.
                        This property does not accommodate bachelor(ette) or similar parties.
                        Quiet hours are between 23:00:00 and 07:00:00.
                        A damage deposit of CAD 600 is required. The property charges this days before arrival. This will be collected by credit card. You should be reimbursed within 14 days of check-out. 
                        Your deposit will be refunded in full by credit card, subject to an inspection of the property.
                        License number: STR-2603-JBFPPZ                    
                    </p>
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>FAQs about Atlantis Suites The Entertainment District - Toronto</h3>
            </section>
            
        </main>
    )
}



export default HotelInfo