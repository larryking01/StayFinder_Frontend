import styles from './hotelCard.module.scss'
import hero from '../../assets/images/hero_5.webp'








const HotelCard = () => {


    return (
        <main className={ styles.hotelCard }>
            <section className={ styles.hotelCard__coverImage }>
                <img src={ hero } />
            </section>

            <section className={ styles.hotelCard__details }>
                <article>
                    <div className={ styles.nameLocation }>
                        <h3>Accra Marriott Hotel </h3>
                        <p>Accra</p>
                    </div>

                    <div className={ styles.reviewsInfo }>
                        <p className={ styles.averageRating }>8.7</p>
                        <p>Very good</p>
                        <p>21 reviews</p>
                    </div>
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