import styles from './home.module.scss'
import ReservationForm from '../../components/reservationForm/reservationForm'
import HotelCard from '../../components/hotelCard/hotelCard'
import hero from '../../assets/images/hero_1.jpg'
import bookingDotCom from '../../assets/images/bookingDotComLogo.webp'
import expedia from '../../assets/images/expediaLogo.webp'
import hotelsDotCom from '../../assets/images/hotelsDotComLogo.png'
import priceLine from '../../assets/images/pricelineLogo.jpg'
import ghanaFlag from '../../assets/images/ghanaFlag.png'











const Home = () => {



    return (
        <main className={ styles.home }>
            <section className={ `${ styles.home__hero } ${ styles.marginBottom }` }>
                <h3>Your next trip starts here</h3>

                <div className={ styles.home__datePicker }>
                    <ReservationForm />
                </div>
            </section>


            <article className={ styles.mainContent }>
                <section className={ styles.marginBottom }>
                    <h3 className={ styles.titleText }>Get away for a while</h3>
                    <p className={ styles.regularText }>Whether for business, vacation or pleasure, StayFinder can help you find the best hotel for your needs right here.</p>
                </section>


                <section className={ styles.home__hotelsList }>
                    <h3 className={ styles.titleText }>Discover your favourite place with us</h3>
                    <div className={ styles.hotelsGrid }>
                        <HotelCard />
                        <HotelCard />
                        <HotelCard />
                        <HotelCard />
                    </div>
                </section>


                <section className={ `${ styles.home__aboutUs } ${ styles.marginBottom }`}>
                    <div className={ styles.nameContainer }>
                        <h3>Who are we?</h3>
                    </div>

                    <div className={ styles.briefDescriptionContainer }>
                        <p>
                            StayFinder is a modern hotel booking platform dedicated to helping travelers discover exceptional accommodations with ease and confidence. 
                            Whether you're planning a relaxing getaway, a business trip, or a family vacation, StayFinder connects you with carefully curated hotels, 
                            resorts, lodges, and apartments across a variety of destinations.                        
                        </p>
                    </div>

                    <div className={ styles.ourImagesContainer }>
                        <img src={ hero } />
                        <img src={ hero } />
                        <img src={ hero } />
                    </div>
                </section>


                <section className={ `${styles.home__trending} ${ styles.marginBottom }` }>
                    <h3 className={ styles.titleText }>Trending Destinations</h3>
                    <p className={ styles.regularText }>
                        Most popular choices for travelers from Ghana
                    </p>

                    <div className={ styles.trendingGrid }>
                        <div className={ styles.destinationItem }>
                            <img src={ hero } className={ styles.destinationImage }/>

                            <div className={ styles.destinationTarget }>
                                <p>Accra</p>
                                <img src={ ghanaFlag } className={ styles.destinationFlag }/>
                            </div>
                        </div>

                        <div className={ styles.destinationItem }>
                            <img src={ hero } className={ styles.destinationImage }/>

                            <div className={ styles.destinationTarget }>
                                <p>Accra</p>
                                <img src={ ghanaFlag } className={ styles.destinationFlag }/>
                            </div>
                        </div>

                        <div className={ styles.destinationItem }>
                            <img src={ hero } className={ styles.destinationImage }/>

                            <div className={ styles.destinationTarget }>
                                <p>Accra</p>
                                <img src={ ghanaFlag } className={ styles.destinationFlag }/>
                            </div>
                        </div>

                        <div className={ styles.destinationItem }>
                            <img src={ hero } className={ styles.destinationImage }/>

                            <div className={ styles.destinationTarget }>
                                <p>Accra</p>
                                <img src={ ghanaFlag } className={ styles.destinationFlag }/>
                            </div>
                        </div>

                        <div className={ styles.destinationItem }>
                            <img src={ hero } className={ styles.destinationImage }/>

                            <div className={ styles.destinationTarget }>
                                <p>Accra</p>
                                <img src={ ghanaFlag } className={ styles.destinationFlag }/>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={`${ styles.home__ourPartners } ${ styles.marginBottom }`}>
                    <h3 className={ styles.titleText }>Partnering for Better Travel Experiences</h3>
                    <p className={ styles.regularText }>
                        We collaborate with leading hotels and hospitality brands to connect travelers with comfortable, reliable, and memorable stays. 
                        Together, we're making travel planning simpler, smarter, and more accessible.
                    </p>

                    <div className={ styles.partnerIcons }>
                        <img src={ bookingDotCom } />
                        <img src={ expedia } />
                        <img src={ hotelsDotCom } />
                        <img src={ priceLine } />
                    </div>
                </section>

            </article>
        </main>
    )
}



export default Home