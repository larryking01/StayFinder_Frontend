import styles from './hotelCard.module.scss'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../hooks/useStore'
import { updateSelectedHotel } from '../../store/features/hotelSlice/hotel.slice'

import ReviewSummary from '../reviewSummary/reviewSummary'
import type { HotelCardProps } from '../../types/componentProps/hotelCardProps'











const HotelCard = ( { hotel }: HotelCardProps ) => {

    
    const navigate = useNavigate()
    const dispatch = useAppDispatch()



    const handleNavigateToHotelInfo = () => {
        // set selected hotel to the one just clicked
        dispatch(updateSelectedHotel( hotel ))

        navigate(`/${ hotel.hotelName }/${ hotel.id }`)
    }


    return (
        <main className={ styles.hotelCard } onClick={ handleNavigateToHotelInfo }>
            <section className={ styles.hotelCard__coverImage }>
                <img src={ hotel.coverImageURL } />
            </section>

            <section className={ styles.hotelCard__details }>
                <article className={ styles.nameLocationRating }>
                    <h3>{ hotel.hotelName }</h3>
                    <p>{ hotel.city }</p>
                    <ReviewSummary reviewSummary={{ averageRating: hotel.averageRating, reviewCount: hotel.reviewCount }}/>
                </article>

                <article className={ styles.pricingInfo }>
                    <p>GHS { hotel.priceRange } per night</p>
                </article>
            </section>
        </main>
    )
}



export default HotelCard