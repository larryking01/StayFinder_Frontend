import styles from './bookedHotels.module.scss'
import BookingCard from '../../components/bookingCard/bookingCard'
import Empty from '../../components/empty/empty'










const BookedHotels = () => {


    let bookedHotels: number[] = [0, 1, 2, 3 ,4]

    

    return (
        <main className={ styles.bookings }>
            <section className={ styles.bookings__title }>
                <h3>Upcoming bookings</h3>
            </section>

            {
                bookedHotels.length > 0 ?
                bookedHotels.map( booking => <BookingCard key={ booking } /> )
                :
                <Empty emptyCardInfo={{
                    title: 'No bookings to show',
                    content: "You don't have any upcoming stays yet. Start exploring and find the perfect place for your next trip."
                }} />
            }
        </main>
    )
}



export default BookedHotels