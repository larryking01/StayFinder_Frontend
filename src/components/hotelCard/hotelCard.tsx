import styles from './hotelCard.module.scss'
import ReviewSummary from '../reviewSummary/reviewSummary'
import { useNavigate } from 'react-router'
import type { HotelCardProps } from '../../types/componentProps/hotelCardProps'










const HotelCard = ( { hotel }: HotelCardProps ) => {

    
    const navigate = useNavigate()


    const handleNavigateToHotelInfo = () => {
        navigate('/Accra Marriot Hotel/85789325634857243')
    }


    return (
        <main className={ styles.hotelCard } onClick={ handleNavigateToHotelInfo }>
            <section className={ styles.hotelCard__coverImage }>
                <img src={ hotel.coverImageURL } />
            </section>

            <section className={ styles.hotelCard__details }>
                <article>
                    <div className={ styles.nameLocation }>
                        <h3>{ hotel.hotelName }</h3>
                        <p>{ hotel.city }</p>
                    </div>
                    
                    <ReviewSummary reviewSummary={{ averageRating: hotel.averageRating, reviewCount: hotel.reviewCount }} />
                </article>

                <article>
                    <div className={ styles.pricingInfo }>
                        {/* <h3>$134</h3> <p>per night</p> */}
                        <p>GHS { hotel.priceRange } per night</p>
                    </div>
                </article>
            </section>
        </main>
    )
}



export default HotelCard