import styles from './hotelCard.module.scss'
import hero from '../../assets/images/hero_5.webp'
import ReviewSummary from '../reviewSummary/reviewSummary'
import { useNavigate } from 'react-router'









const HotelCard = () => {

    
    const navigate = useNavigate()


    const handleNavigateToHotelInfo = () => {
        navigate('/Accra MArriot Hotel/85789325634857243')
    }


    return (
        <main className={ styles.hotelCard } onClick={ handleNavigateToHotelInfo }>
            <section className={ styles.hotelCard__coverImage }>
                <img src={ hero } />
            </section>

            <section className={ styles.hotelCard__details }>
                <article>
                    <div className={ styles.nameLocation }>
                        <h3>Accra Marriott Hotel </h3>
                        <p>Accra</p>
                    </div>
                    
                    <ReviewSummary />
                </article>

                <article>
                    <div className={ styles.pricingInfo }>
                        <h3>$134</h3> <p>per night</p>
                    </div>
                </article>
            </section>
        </main>
    )
}



export default HotelCard