import styles from './searchResults.module.scss'
import ReservationForm from '../../components/reservationForm/reservationForm'
import ResultHotel from '../../components/resultHotel/resultHotel'
import cover from '../../assets/images/hero_2.jpg'






const SearchResults = () => {


    return (
        <main className={ styles.searchResults }>
            <section className={ styles.searchResults__reservationForm }>
                <ReservationForm />
            </section>

            <article className={ styles.searchResults__displayResults }>
                <section className={ styles.resultsMetadata }>
                    <div className={ styles.mapContainer }>
                        <img src={ cover } />
                        <p>View in map</p>
                    </div>
                </section>

                <section className={ styles.resultsContent }>
                    <div className={ styles.options }>
                        <h3>Kumasi: 103 properties found</h3>
                        
                        <div className={ styles.filter }>
                            <p>Sort by recommended for you</p>
                        </div>
                    </div>

                    <div className={ styles.hotelsList }>
                        <ResultHotel />
                    </div>

                    <div className={ styles.hotelsList }>
                        <ResultHotel />
                    </div>

                    <div className={ styles.hotelsList }>
                        <ResultHotel />
                    </div>

                    <div className={ styles.hotelsList }>
                        <ResultHotel />
                    </div>

                    <div className={ styles.hotelsList }>
                        <ResultHotel />
                    </div>
                </section>
            </article>
            
        </main>
    )
}



export default SearchResults