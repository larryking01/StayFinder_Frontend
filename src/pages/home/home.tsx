import styles from './home.module.scss'
import { selectAllHotels } from '../../store/features/hotelSlice/hotel.selectors'
import { useAppSelector } from '../../hooks/useStore'


import ReservationWidget from '../../components/reservationWidget/reservationWidget'
import HotelCard from '../../components/hotelCard/hotelCard'
import hero from '../../assets/images/hero_1.jpg'
import bookingDotCom from '../../assets/images/bookingDotComLogo.webp'
import expedia from '../../assets/images/expediaLogo.webp'
import hotelsDotCom from '../../assets/images/hotelsDotComLogo.png'
import priceLine from '../../assets/images/pricelineLogo.jpg'
import TrendingDestination from '../../components/trendingDestination/trendingDestination'



import type { Hotel } from '../../types/hotel.model'






const Home = () => {


    const hotels = useAppSelector( selectAllHotels )


    let renderedHotels = hotels.map(( hotel: Hotel ) => (
        <HotelCard coverImage={ hotel.coverImageURL } hotelName={ hotel.hotelName } location={ hotel.city } />
    ))



    return (
        <main className={ styles.home }>
            <section className={ `${ styles.home__hero } ${ styles.marginBottom }` }>
                <h3>Your next trip starts here</h3>

                <div className={ styles.reservationWrapper }>
                    <ReservationWidget />
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
                        { renderedHotels }
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
                        <TrendingDestination />
                        <TrendingDestination />
                        <TrendingDestination /> 
                        <TrendingDestination />
                        <TrendingDestination />
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