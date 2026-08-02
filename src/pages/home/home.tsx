import styles from './home.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { selectAllHotels, selectHotelsLoadingState, selectAppName } from '../../store/features/hotelSlice/hotel.selectors'
import { fetchHotels } from '../../store/features/hotelSlice/hotel.thunks'
import { useEffect } from 'react'


import ReservationWidget from '../../components/reservationWidget/reservationWidget'
import HotelCard from '../../components/hotelCard/hotelCard'
import TrendingDestination from '../../components/trendingDestination/trendingDestination'
import Loading from '../../components/loading/loading'
import { whoAreWeImages } from '../../data/whoAreWe'
import { partnerIcons } from '../../data/partnerIcons'







const Home = () => {

    const dispatch = useAppDispatch()
    const isLoadingHotels = useAppSelector( selectHotelsLoadingState )
    const hotels = useAppSelector( selectAllHotels )
    const appName = useAppSelector( selectAppName )


    // fetch hotels from database and populate the store.
    useEffect(() => {
        dispatch(fetchHotels())
    }, [ dispatch ])


    if( isLoadingHotels ) {
        return (
            <Loading />
        )
    }


    let renderedHotels = hotels?.length === 0 ?
            <p className={ styles.regularText }>There are currently no hotels to display. Please check back later.</p>
            :
            hotels?.map( hotel => ( <HotelCard hotel={ hotel } key={ hotel.id } />))



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
                        <p className={ styles.regularText }>Whether for business, vacation or pleasure, { appName } can help you find the best hotel for your needs right here.</p>
                    </section>


                    <section className={ styles.home__hotelsList }>
                        <h3 className={ styles.titleText }>Discover your favourite place with us</h3>
                        <div className={ hotels.length === 0 ? styles.noHotels : styles.hotelsGrid }>
                            { renderedHotels }
                        </div>
                    </section>


                    <section className={ `${ styles.home__aboutUs } ${ styles.marginBottom }`}>
                        <div className={ styles.nameContainer }>
                            <h3>Who are we?</h3>
                        </div>

                        <div className={ styles.briefDescriptionContainer }>
                            <p>
                                { appName } is a modern hotel booking platform dedicated to helping travelers discover exceptional accommodations with ease and confidence. 
                                Whether you're planning a relaxing getaway, a business trip, or a family vacation, { appName } connects you with carefully curated hotels, 
                                resorts, lodges, and apartments across a variety of destinations.                        
                            </p>
                        </div>

                        <div className={ styles.ourImagesContainer }>
                            {
                                whoAreWeImages.map( image => (
                                    <img src={ image } alt={ image } key={ image } />
                                ))
                            }
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
                            {
                                partnerIcons.map( icon => (
                                    <img src={ icon.src } key={ icon.name } alt={ icon.name } />
                                ))
                            }
                        </div>
                    </section>

                </article>
            </main>
    )
}



export default Home