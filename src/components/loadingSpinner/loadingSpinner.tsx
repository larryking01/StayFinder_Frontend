import { Loader } from 'lucide-react'
import styles from './loadingSpinner.module.scss'








const LoadingSpinner = () => {

    return (
        <main className={ styles.loadingSpinner }>
            <Loader size={ 24 } className={ styles.loadingSpinner__icon }/>
        </main>
    )

}



export default LoadingSpinner




