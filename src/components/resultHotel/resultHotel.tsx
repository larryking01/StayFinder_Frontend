import styles from './resultHotel.module.scss'
import cover1 from '../../assets/images/hero_2.jpg'
import { MapPin } from 'lucide-react'











const ResultHotel = () => {


    return (
        <main className={ styles.resultHotel }>
            <article className={ styles.resultHotel__coverImage }>
                <img src={ cover1 } />
            </article>

            <article className={ styles.resultHotel__info }>
                <section className={ styles.hotelNameAndReview }>
                    <h3>Accra Marriott Hotel</h3>

                    <div className={ `${ styles.reviewsInfo } ${ styles.regularFont }` }>
                        <p className={ styles.averageRating }>8.7</p>
                        <p>Very good</p>
                        <p>21 reviews</p>
                    </div>
                </section>


                <section className={ `${ styles.location } ${ styles.regularFont }` }>
                    <MapPin size={ 20 } />
                    <p>Airport, Accra</p>
                </section>


                <section className={ `${ styles.topFeatures } ${ styles.regularFont }` }>
                    <p>Breakfast</p>
                    <p>Pool</p>
                    <p>Restaurant</p>
                </section>


                <section className={ `${ styles.refund } ${ styles.regularFont }` }>
                    <p>Fully refundable. Reserve now, pay later</p>
                </section>


                <section className={ `${ styles.pricing } ${ styles.regularFont }` }>
                    <p>31 nights, 2 adults</p>
                    <h3>$ 7, 346, 895, 431.87</h3>
                </section>

            </article>
        </main>
    )
}


export default ResultHotel