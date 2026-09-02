import styles from './hotelInfo.module.scss'
import { MapPin, CircleSmall, Info } from 'lucide-react'
import { useParams } from 'react-router'
import { useAppSelector, useAppDispatch } from '../../hooks/useStore'
import { fetchSelectedHotelById } from '../../store/features/hotelSlice/hotel.thunks'
import { selectChosenHotel, selectHotelsLoadingState } from '../../store/features/hotelSlice/hotel.selectors'
import { fetchHotelReviewsById } from '../../store/features/reviewSlice/review.thunk'
import { selectHotelReviews } from '../../store/features/reviewSlice/review.selectors'
import { fetchRoomsByHotelId } from '../../store/features/roomsSlice/rooms.thunk'
import { selectRooms } from '../../store/features/roomsSlice/rooms.selectors'
import { useEffect, useRef } from 'react'

import { paymentOptions } from '../../data/paymentOptions'
import ReviewCard from '../../components/reviewCard/reviewCard'
import ReviewSummary from '../../components/reviewSummary/reviewSummary'
import Loading from '../../components/loading/loading'
import Empty from '../../components/empty/empty'
import RoomCard from '../../components/roomCard/roomCard'










const HotelInfo = () => {

    const { hotelId } = useParams()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector( selectHotelsLoadingState )
    const selectedHotel = useAppSelector( selectChosenHotel )
    const hotelReviews = useAppSelector( selectHotelReviews )
    const hotelRooms = useAppSelector( selectRooms )
    const descriptionRef = useRef<HTMLElement | null>(null)
    const amenitiesRef = useRef<HTMLElement | null>(null)
    const policiesRef = useRef<HTMLElement | null>(null)
    const roomsRef = useRef<HTMLElement | null>(null)
    const paymentMethodsRef = useRef<HTMLElement | null>(null)
    const reviewsRef = useRef<HTMLElement | null>(null)





    useEffect(() => {
        if(!selectedHotel) {
            dispatch(fetchSelectedHotelById( hotelId as string ))
        }

    },[ dispatch, selectedHotel, hotelId ])



    useEffect(() => {
        if (selectedHotel) {
            dispatch(fetchRoomsByHotelId(selectedHotel.id))
            dispatch(fetchHotelReviewsById(selectedHotel.id));
        }

    }, [ dispatch, selectedHotel ])


    const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null> ) => {
        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
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
                    selectedHotel?.galleryImages.slice(0, 6).map(
                        (image, index) => ( <img src={ image } key={ index } alt="hotel gallery image" />)
                    )
                }
            </section>


            <section className={ styles.hotelInfo__headingList }>
                <p onClick={() => scrollToSection( descriptionRef )} className='nav-link-default'>
                    Description
                </p>

                <p onClick={() => scrollToSection( amenitiesRef )} className='nav-link-default'>
                    Amenities
                </p>

                <p onClick={() => scrollToSection( policiesRef )} className='nav-link-default'>
                    Policies
                </p>

                <p onClick={() => scrollToSection( roomsRef )} className='nav-link-default'>
                    Rooms
                </p>

                <p className='nav-link-default'>
                    Location
                </p>

                <p onClick={() => scrollToSection( paymentMethodsRef )} className='nav-link-default'>
                    Payment Methods
                </p>

                <p onClick={() => scrollToSection( reviewsRef )} className='nav-link-default'>
                    Reviews
                </p>
            </section>


            <section className={ styles.hotelInfo__infoSection }  ref={ descriptionRef }>
                <h3> Description</h3>
                <p>{ selectedHotel?.fullDescription }</p>
            </section>


            <section className={ styles.hotelInfo__infoSection } ref={ amenitiesRef }>
                <h3>Amenities</h3>
                
                <div className={ styles.amenitiesGrid }>
                    {
                        selectedHotel?.amenities.map((amenity, index) => (
                            <div className={ styles.amenityItem } key={ index }>
                                <CircleSmall />
                                <p>{ amenity }</p>
                            </div>
                        ))
                    }
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection } ref={ policiesRef }>
                <h3>Policies & House Rules</h3>
                <p>{ selectedHotel?.hotelName } takes special requests – add in the next step!</p>
                <div className={ styles.houseRulesContainer }>
                    <ul>

                        { selectedHotel?.policies.map((policy, index) => (
                            <li key={ index }>
                                <Info /> 
                                { policy }
                            </li>
                        )) }

                    </ul>
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection } ref={ paymentMethodsRef }>
                <h3>Accepted Payment options</h3>

                <div className={ styles.paymentOptionsDisplay }>
                    {
                        paymentOptions.map( option => (
                            <img src={ option.src } alt={ option.name } key={ option.name } />
                        ))
                    }
                </div>
            </section>


            <section className={ styles.hotelInfo__infoSection } ref={ roomsRef }>
                {
                    hotelRooms.length > 0 ?
                        <h3>Choose Your Room</h3>
                        :
                        <h3>No rooms available yet</h3>
                }

                <article className={ hotelRooms.length > 0 ? styles.roomsGrid : '' }>
                    {
                        hotelRooms.length > 0 ?
                            hotelRooms.map(( room ) => <RoomCard roomItem={ room } key={ room.id } /> )
                            :
                            <p>Room options for this hotel haven't been added yet. Please check back later.</p>
                    }
                </article>
            </section>


            <section className={ styles.hotelInfo__infoSection } ref={ reviewsRef }>
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