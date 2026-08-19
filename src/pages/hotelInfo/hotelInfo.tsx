import styles from './hotelInfo.module.scss'
import { MapPin, CircleSmall, Info } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import { useAppSelector, useAppDispatch } from '../../hooks/useStore'
import { fetchSelectedHotelById } from '../../store/features/hotelSlice/hotel.thunks'
import { selectChosenHotel, selectHotelsLoadingState } from '../../store/features/hotelSlice/hotel.selectors'
import { fetchHotelReviewsById } from '../../store/features/reviewSlice/review.thunk'
import { selectHotelReviews } from '../../store/features/reviewSlice/review.selectors'
import { useEffect } from 'react'


import cover1 from '../../assets/images/hero_2.jpg'
import { paymentOptions } from '../../data/paymentOptions'
import ReviewCard from '../../components/reviewCard/reviewCard'
import ReviewSummary from '../../components/reviewSummary/reviewSummary'
import Loading from '../../components/loading/loading'
import Empty from '../../components/empty/empty'
import RoomCard from '../../components/roomCard/roomCard'
// import ReservationWidget from '../../components/reservationWidget/reservationWidget'









const HotelInfo = () => {


    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector( selectHotelsLoadingState )
    const selectedHotel = useAppSelector( selectChosenHotel )
    const hotelReviews = useAppSelector( selectHotelReviews )
    const { hotelName, hotelId } = useParams()


    useEffect(() => {
        if(!selectedHotel) {
            dispatch(fetchSelectedHotelById( hotelId as string ))
        }

        // console.log("selected hotel = ", selectedHotel)
    },[ dispatch, selectedHotel, hotelId ])



    useEffect(() => {
        if (selectedHotel) {
            dispatch(fetchHotelReviewsById(selectedHotel.id));
        }

        // console.log("hotel reviews = ", hotelReviews)
    }, [ dispatch, selectedHotel])



    const navigateToCheckout = () => {
        navigate(`/checkout/${ hotelName }/${ hotelId }`)
    }


    if(isLoading) {
        return (
            <Loading />
        )
    }


    if(!selectedHotel) {
        return (
            <Empty emptyCardInfo={{ 
                title: "Hotel not found", 
                content: "The hotel you're looking for doesn't exist or may have been removed. Return to the homepage to explore other hotels"}} 
            />
        )
    }


    return (
        <main className={ styles.hotelInfo }>           
            <section className={ styles.hotelInfo__nameLocationCTA }>
                <article className={ styles.nameAndCTA }>
                    <h3>{ selectedHotel?.hotelName }</h3>
                </article>

                <article className={ styles.locationDisplay }>
                    <MapPin size={ 20 } className={ styles.iconWrapper } />
                    <div className={ styles.locationContainer }>
                        <p>{ selectedHotel?.streetAddress }</p>
                        <p>{ selectedHotel?.city }</p>
                    </div>
                </article>
            </section>


            <section className={ styles.hotelInfo__picturesDisplayGrid }>
                {
                    selectedHotel?.galleryImages.map( image => ( <img src={ image } />))
                }
            </section>


            <section className={ styles.hotelInfo__headingList }>
                <p>Description</p>
                <p>Amenities</p>
                <p>Policies</p>
                <p>Rooms</p>
                <p>Location</p>
                <p>Payment Methods</p>
                <p>Reviews</p>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Description</h3>
                <p>{ selectedHotel?.fullDescription }</p>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Amenities</h3>
                
                <div className={ styles.amenitiesGrid }>
                    {
                        selectedHotel?.amenities.map( amenity => (
                            <div className={ styles.amenityItem }>
                                <CircleSmall />
                                <p>{ amenity }</p>
                            </div>
                        ))
                    }
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Policies & House Rules</h3>
                <p>{ selectedHotel?.hotelName } takes special requests – add in the next step!</p>
                <div className={ styles.houseRulesContainer }>
                    <ul>

                        { selectedHotel?.policies.map( policy => (
                            <li>
                                <Info /> 
                                { policy }
                            </li>
                        )) }

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
                <h3>Choose Your Room</h3>
                <article className={ styles.roomsGrid }>
                    {
                        [1, 2, 3].map(() => <RoomCard /> )
                    }
                </article>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>Guest Reviews</h3>

                {
                    hotelReviews.length === 0 ?
                        <article>
                            <p>No reviews yet. Be the first to share your experience at this hotel.</p>
                        </article>
                        :
                        <article>
                            <div className={ styles.reviewsInfo }>
                                <ReviewSummary 
                                    reviewSummary={{ averageRating: selectedHotel?.averageRating!, reviewCount: selectedHotel?.reviewCount!}} 
                                />
                            </div>

                            <p className={ styles.topRatedText }>Top-rated guest experiences</p>

                            <div className={ styles.reviewsGrid }>
                                {
                                    hotelReviews.map( review => (
                                        <ReviewCard review={ review } key={ review.id } />
                                    ))
                                }
                            </div>

                            <button className={ styles.hotelInfo__actionBtn }>Read all</button>
                        </article>
                }

            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>The fine print</h3>
                <p>Must-know information for guests at this property</p>

                <div className={ styles.finePrintContainer }>
                    <p>{ selectedHotel?.finePrint }</p>
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection }>
                <h3>FAQs about { selectedHotel?.hotelName }</h3>
            </section>
            
        </main>
    )
}



export default HotelInfo