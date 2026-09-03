import styles from './bookingCard.module.scss'
import cover1 from '../../assets/images/hero_4.jpg'
import { useEffect, useState } from 'react'
import { CircleCheck, CircleX, CircleDashed } from 'lucide-react'










const BookingCard = () => {


    let bookingStatus = 'confirmed'
    const [ bookingStatusText, setBookingStatusText ] = useState<string>('Booking Pending')



    useEffect(() => {
        if(bookingStatus === 'confirmed') {
            setBookingStatusText('Booking confirmed') 
        }
        else if(bookingStatus === 'rejected') {
            setBookingStatusText('Booking rejected')
        }
        else {
            setBookingStatusText('Booking pending')
        }

    }, [ bookingStatus ])



    return (
        <main className={ styles.bookingCard }>
            <section className={ styles.bookingCard__listings }>
                <article className={ styles.bookingItem }>
                    <div className={ styles.bookingDetails }>
                        <div className={ styles.hotelImage }>
                            <img src={ cover1 } alt="hotel image" />
                        </div>

                        <div className={ styles.bookingSummary }>
                            <h3>Comfort Inn & Conference Centre, Toronto.</h3>
                            <p>Booking reference: GYGRFQG3NZ8F </p>
                            <p>Deluxe King Room</p>
                            <p>October 5 - October 11 (6 nights)</p>
                            <p>2 adults, 1 room</p>
                            <div className={`${ styles.bookingStatusContainer } ${ styles[`booking--${ bookingStatus }`]}`}>
                                { 
                                    bookingStatus === 'confirmed' ? 
                                        <CircleCheck />
                                    : 
                                    bookingStatus === 'rejected' ?
                                        <CircleX />
                                    :
                                    <CircleDashed />
                                }
                                <p>
                                    { bookingStatusText }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={ styles.pricingInfo }>
                       <h3>US$ 753.00</h3>
                    </div>
                </article>
            </section>
        </main>
    )
}



export default BookingCard