import styles from './resultHotel.module.scss'
import { MapPin } from 'lucide-react'
import type { HotelCardProps } from '../../types/componentProps/hotelCardProps'
import { useNavigate } from 'react-router'
import ReviewSummary from '../reviewSummary/reviewSummary'
import { useAppDispatch } from '../../hooks/useStore'
import { updateSelectedHotel } from '../../store/features/hotelSlice/hotel.slice'











const ResultHotel = ({ hotel }: HotelCardProps) => {


    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const handleNavigateToHotelInfo = () => {
        dispatch(updateSelectedHotel(hotel))
        navigate(`/${ hotel.hotelName }/${ hotel.id }`)
    }


    return (
        <main className={ styles.resultHotel } onClick={ handleNavigateToHotelInfo }>
            <article className={ styles.resultHotel__coverImage }>
                <img src={ hotel.coverImageURL }/>
            </article>

            <article className={ styles.resultHotel__info }>
                <section className={ styles.infoItemContainer }>
                    <div className={ styles.hotelNameAndReview }>
                        <h3>{ hotel.hotelName }</h3>
                        <ReviewSummary reviewSummary={{ averageRating: hotel.averageRating, reviewCount: hotel.reviewCount }} />
                    </div>

                    <div className={ `${ styles.infoItem } ${ styles.smallFont }` }>
                        <MapPin size={ 20 } />
                        <p className={ styles.location }>{ hotel.streetAddress }, { hotel.city}</p>
                    </div>
                </section>


                <section className={ styles.infoItemContainer }>
                    <div className={ `${ styles.infoItem } ${ styles.smallFont }` }>
                        {
                            hotel.amenities.slice(0,3).map((amenity, index) => (
                                <p key={ index }>{ amenity } |</p>
                            ))
                        }
                    </div>

                    <div className={ `${ styles.description } ${ styles.smallFont }` }>
                        <p>{ hotel.shortDescription }</p>
                    </div>
                </section>


                <section className={ styles.infoItemContainer }>
                    <div className={ `${ styles.pricing } ${ styles.smallFont }` }>
                        <p>3 nights | 1 adult</p>
                        <h3>GHS { hotel.startingPrice }</h3>
                    </div>
                </section>
            </article>
        </main>
    )
}


export default ResultHotel