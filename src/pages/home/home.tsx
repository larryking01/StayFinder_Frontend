import styles from './home.module.scss'
import ReservationForm from '../../components/reservationForm/reservationForm'












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
                <h3>Most trending</h3>
            </section>
        </main>
    )
}



export default Home