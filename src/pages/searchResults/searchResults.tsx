import styles from './searchResults.module.scss'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { useAppSelector, useAppDispatch } from '../../hooks/useStore'
import { fetchHotels } from '../../store/features/hotelSlice/hotel.thunks'
import { selectHotelsBySearchQuery } from '../../store/features/hotelSlice/hotel.selectors'
import { selectHotelsLoadingState } from '../../store/features/hotelSlice/hotel.selectors'
import ReservationWidget from '../../components/reservationWidget/reservationWidget'
import ResultHotel from '../../components/resultHotel/resultHotel'
import Empty from '../../components/empty/empty'
import map1 from '../../assets/images/map1.avif'
import { filterCategory } from '../../data/filterCategories'
import { ChevronDown } from 'lucide-react'
import Loading from '../../components/loading/loading'










const SearchResults = () => {


    const [searchParams] = useSearchParams()
    const destination = searchParams.get('query')
    const dispatch = useAppDispatch()
    const isLoadingHotels = useAppSelector(selectHotelsLoadingState)
    const matchingHotels = useAppSelector(state => selectHotelsBySearchQuery(state, destination as string))



    useEffect(() => {
        if(matchingHotels.length === 0) {
            dispatch(fetchHotels())
        }

    }, [searchParams, dispatch])


    
    if(isLoadingHotels) {
        return (
            <Loading />
        )
    }


    if(matchingHotels.length === 0) {
        return (
            <Empty emptyCardInfo={{
                title: "No hotels found",
                content: "We couldn't find any hotels matching your search. Try searching for a different hotel, city, or location."
            }} />
        )
    }



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
                        <h3>{`${ destination }: ${ matchingHotels.length } 
                            ${ matchingHotels.length === 1 ? 'property' : 'properties'} 
                            found.`}
                        </h3>
                        
                        <div className={ styles.filter }>
                            <p>Sort by: Recommended for you</p>
                            <ChevronDown  size={ 20 }/>
                        </div>
                    </div>

                    {
                        matchingHotels.map( hotel => (
                            <div className={ styles.hotelsList } key={ hotel.id}>
                                <ResultHotel hotel={ hotel } /> 
                            </div>
                        ))
                    }
                </section>
            </article>
            
        </main>
    )
}



export default SearchResults