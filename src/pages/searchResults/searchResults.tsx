import styles from './searchResults.module.scss'
import ReservationWidget from '../../components/reservationWidget/reservationWidget'
import ResultHotel from '../../components/resultHotel/resultHotel'
import map1 from '../../assets/images/map1.avif'
import { filterCategory } from '../../data/filterCategories'
import { ChevronDown } from 'lucide-react'










const SearchResults = () => {


    return (
        <main className={ styles.searchResults }>
            <section className={ styles.searchResults__reservationForm }>
                <ReservationWidget />
            </section>

            <article className={ styles.searchResults__displayResults }>
                <section className={ styles.resultsMetadata }>
                    <div className={ styles.mapContainer }>
                        <img src={ map1 } />
                        <p>View in map</p>
                    </div>

                    <div className={ styles.filterContainer }>
                        <h3 className={ styles.filterByTitle }>Filter by</h3>
                        {
                            filterCategory.map( filter => (
                                <div className={ styles.filterCategory }>
                                    <h3 className={ styles.categoryTitle }>{ filter.title }</h3>
                                    {
                                        filter.options.map( option => (
                                            <div className={ styles.filterOption }>
                                                <input type="checkbox" className={ styles.checkBox } />
                                                <p className={ styles.optionName }>{ option }</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                
                            ))
                        }
                    </div>
                </section>


                <section className={ styles.resultsContent }>
                    <div className={ styles.options }>
                        <h3>Kumasi: 103 properties found</h3>
                        
                        <div className={ styles.filter }>
                            <p>Sort by: Recommended for you</p>
                            <ChevronDown  size={ 20 }/>
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