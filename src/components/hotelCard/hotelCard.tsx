import styles from './hotelCard.module.scss'
import ReviewSummary from '../reviewSummary/reviewSummary'
import { useNavigate } from 'react-router'




interface HotelCardProps {
    coverImage: string,
    hotelName: string,
    location: string
}




const HotelCard = ( { coverImage, hotelName, location } : HotelCardProps) => {

    
    const navigate = useNavigate()


    const handleNavigateToHotelInfo = () => {
        navigate('/Accra MArriot Hotel/85789325634857243')
    }


    return (
        <main className={ styles.hotelCard } onClick={ handleNavigateToHotelInfo }>
            <section className={ styles.hotelCard__coverImage }>
                <img src={ coverImage } />
            </section>

            <section className={ styles.hotelCard__details }>
                <article>
                    <div className={ styles.nameLocation }>
                        <h3>{ hotelName }</h3>
                        <p>{ location }</p>
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