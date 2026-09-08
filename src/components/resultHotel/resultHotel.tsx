import styles from './resultHotel.module.scss'
import cover1 from '../../assets/images/hero_2.jpg'
import { MapPin } from 'lucide-react'
// import ReviewSummary from '../reviewSummary/reviewSummary'
import type { HotelCardProps } from '../../types/componentProps/hotelCardProps'
import { useNavigate } from 'react-router'









const ResultHotel = ({ hotel }: HotelCardProps) => {


    const navigate = useNavigate()


    const handleNavigateToHotelInfo = () => {
        navigate(`/${ hotel.hotelName }/${ hotel.id }`)
    }


    return (
        <main className={ styles.resultHotel } onClick={ handleNavigateToHotelInfo }>
            <article className={ styles.resultHotel__coverImage }>
                <img src={ hotel.coverImageURL } />
            </article>

            <article className={ styles.resultHotel__info }>
                <section className={ styles.hotelNameAndReview }>
                    <h3>{ hotel.hotelName }</h3>

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
                    <p>31 nights, 2 adults</p>
                    <h3>GHS { hotel.startingPrice }</h3>
                </section>

            </article>
        </main>
    )
}


export default ResultHotel