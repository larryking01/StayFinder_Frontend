import styles from './resultHotel.module.scss'
import cover1 from '../../assets/images/hero_2.jpg'
import { MapPin } from 'lucide-react'
import ReviewSummary from '../reviewSummary/reviewSummary'
import { useNavigate } from 'react-router'









const ResultHotel = () => {


    const navigate = useNavigate()


    const handleNavigateToHotelInfo = () => {
        navigate('/Accra MArriot Hotel/85789325634857243')
    }


    return (
        <main className={ styles.resultHotel } onClick={ handleNavigateToHotelInfo }>
            <article className={ styles.resultHotel__coverImage }>
                <img src={ cover1 } />
            </article>

            <article className={ styles.resultHotel__info }>
                <section className={ styles.hotelNameAndReview }>
                    <h3>Accra Marriott Hotel</h3>

                    <ReviewSummary />
                </section>


                <section className={ `${ styles.location } ${ styles.smallFont }` }>
                    <MapPin size={ 20 } />
                    <p>Airport, Accra</p>
                </section>


                <section className={ `${ styles.topFeatures } ${ styles.smallFont }` }>
                    <p>Breakfast</p>
                    <p>Pool</p>
                    <p>Restaurant</p>
                </section>


                <section className={ `${ styles.refund } ${ styles.smallFont }` }>
                    <p>Fully refundable. Reserve now, pay later</p>
                </section>


                <section className={ `${ styles.pricing } ${ styles.smallFont }` }>
                    <p>31 nights, 2 adults</p>
                    <h3>$ 7, 346, 895</h3>
                </section>

            </article>
        </main>
    )
}


export default ResultHotel