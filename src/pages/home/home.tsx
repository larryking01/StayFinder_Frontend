import styles from './home.module.scss'
import ReservationForm from '../../components/reservationForm/reservationForm'
import HotelCard from '../../components/hotelCard/hotelCard'
import { Hotel } from 'lucide-react'











const Home = () => {



    return (
        <main className={ styles.home }>
            <section className={ styles.home__hero }>
                <h3>Your next trip starts here</h3>

                <div className={ styles.home__datePicker }>
                    <ReservationForm />
                </div>
            </section>

            <section className={ styles.home__content }>
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </section>
        </main>
    )
}



export default Home