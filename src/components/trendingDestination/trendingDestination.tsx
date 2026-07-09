import styles from './trendingDestination.module.scss'
import hero from '../../assets/images/hero_1.jpg'
import ghanaFlag from '../../assets/images/ghanaFlag.png'
import { useNavigate } from 'react-router'








const TrendingDestination = () => {

    const navigate = useNavigate()


    const navigateToSearchResults = () => {
        navigate('/searchResults/Holiday Inn Hotel')
    }



    return (
        <main className={ styles.destinationItem } onClick={ navigateToSearchResults }>
            <img src={ hero } className={ styles.destinationImage }/>

            <div className={ styles.destinationTarget }>
                <p>Accra</p>
                <img src={ ghanaFlag } className={ styles.destinationFlag }/>
            </div>
        </main>
    )
}



export default TrendingDestination