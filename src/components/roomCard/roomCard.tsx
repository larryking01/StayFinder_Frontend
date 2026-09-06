import styles from './roomCard.module.scss'
import { useNavigate } from 'react-router'
import type { RoomCardProp } from '../../types/componentProps/roomCardProps'
import cover1 from '../../assets/images/hero_2.jpg'
import { CircleSmall } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { setSelectedRoom } from '../../store/features/roomsSlice/rooms.slice'
import { selectIntendedTripDates } from '../../store/features/reservationSlice/reservation.selectors'








const RoomCard = ({ roomItem }: RoomCardProp) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const intendedTripDates = useAppSelector( selectIntendedTripDates )


    const navigateToCheckout = () => {
        dispatch(setSelectedRoom( roomItem ))

        // check if user has selected trip dates before navigating to checkout.
        if(!intendedTripDates || intendedTripDates.from?.getTime() === intendedTripDates.to?.getTime()) {
            alert("Please select your start and end dates to continue.")
            return
        }

        navigate(`/checkout/${ roomItem.hotelName }/${ roomItem.hotelId }/${ roomItem.id }`)
    }



    return (
        <article className={ styles.roomItem }>
            <section className={ styles.coverImage }>
                <img src={ cover1 } />
            </section>


            <section className={ styles.roomInfo }>
                <h3>{ roomItem.roomType }</h3>
                {/* <ReviewSummary /> */}

                <h4>Features</h4>
                {
                    roomItem.features.slice(0, 5).map(feature => (
                        <p className={ styles.flexParagraph }> 
                            <CircleSmall size={ 15 } className={ styles.icon }/>
                            { feature }
                        </p>
                    ))
                }
            </section>
    

            <section className={ styles.roomInfo }>
                <h3>Cancellation Policy</h3>
                {
                    roomItem.cancellationPolicy.map(policy => (
                        <p className={ styles.flexParagraph }> 
                            <CircleSmall size={ 15 } className={ styles.icon }/>
                            { policy }
                        </p>
                    ))
                }
            </section>
            

            <section className={ styles.roomInfo }>
                <h3>Pricing ~ GHS { roomItem.price } per night</h3>
                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>1 room × 16 nights</p>
                    <p className={ styles.priceIndicator }>$181</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>15% VAT</p>
                    <p className={ styles.priceIndicator }>$181</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>2.5% NHIL</p>
                    <p className={ styles.priceIndicator }>$181</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>2.5% GETFUND</p>
                    <p className={ styles.priceIndicator }>$181</p>
                </div>



                {/* <div className={ styles.extraItem }>
                    <div className={ styles.extraSelection }>
                        <input type='checkbox' />
                        <p className={ styles.flexParagraph }>No Extras</p>
                    </div>
                    <p className={ styles.priceIndicator }>+ $0</p>
                </div> */}

                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>Total</p>
                    <p className={ styles.priceTotal }>$3500</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.remaningRoomsTtext }>We have { roomItem.numberOfRoomsAvailable } left!</p>
                </div>

                <button className={ styles.reserveBtn } onClick={ navigateToCheckout }>Reserve</button>
                <p className={ styles.notChargedText }>You will not be charged yet</p>
            </section>
        </article>
    )

}




export default RoomCard