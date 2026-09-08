import styles from './resultHotel.module.scss'
import { MapPin } from 'lucide-react'
import { useEffect } from 'react'
// import ReviewSummary from '../reviewSummary/reviewSummary'
import { calculateNumberOfNights } from '../../utils/calculateNumberOfNights'
import { useAppSelector } from '../../hooks/useStore'
import { selectIntendedTripDates, selectIntendedReservationDetails } from '../../store/features/reservationSlice/reservation.selectors'
import type { HotelCardProps } from '../../types/componentProps/hotelCardProps'
import { useNavigate } from 'react-router'












const ResultHotel = ({ hotel }: HotelCardProps) => {


    const navigate = useNavigate()
    const intendedTripDates = useAppSelector( selectIntendedTripDates )
    const reservationDetails = useAppSelector( selectIntendedReservationDetails )



    const handleNavigateToHotelInfo = () => {
        navigate(`/${ hotel.hotelName }/${ hotel.id }`)
    }


    return (
        <main className={ styles.resultHotel }>
            <article className={ styles.resultHotel__coverImage }>
                <img src={ hotel.coverImageURL } onClick={ handleNavigateToHotelInfo } />
            </article>

            <article className={ styles.resultHotel__info }>
                <section className={ styles.hotelNameAndReview }>
                    <h3 onClick={ handleNavigateToHotelInfo }>{ hotel.hotelName }</h3>

                    {/* <ReviewSummary /> */}
                </section>


                <section className={ `${ styles.location } ${ styles.smallFont }` }>
                    <MapPin size={ 20 } />
                    <p>{ hotel.streetAddress }, { hotel.city}</p>
                </section>


                <section className={ `${ styles.topFeatures } ${ styles.smallFont }` }>
                    {
                        hotel.amenities.slice(0,3).map((amenity, index) => (
                            <p key={ index }>{ amenity } |</p>
                        ))
                    }
                </section>


                <section className={ `${ styles.refund } ${ styles.smallFont }` }>
                    <p>{ hotel.shortDescription }</p>
                </section>


                <section className={ `${ styles.pricing } ${ styles.smallFont }` }>
                    <p>3 nights | 1 adult</p>
                    <h3>GHS { hotel.startingPrice }</h3>
                </section>
            </article>
        </main>
    )
}


export default ResultHotel