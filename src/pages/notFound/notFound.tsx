import styles from './notFound.module.scss'
import not_found_img from '../../assets/images/not_found_3.png'












const NotFound = () => {



    return (
        <section className={ styles.notFound }>
            <div className={ styles.notFound__content }>
                <div className={`${styles['notFound__image-wrapper']}`}>
                    <img
                        src={ not_found_img }
                        alt="404 illustration"
                        className={styles.notFound__image}
                    />
                </div>

                <h1 className={ styles.notFound__title }>Oops! Page not found</h1>

                <p className={ styles.notFound__description }>
                    The page you’re looking for doesn’t exist or may have been moved.
                    Let’s get you back on track.
                </p>

                <a href="/" className={ styles.notFound__button }>
                    <span className={`${ styles['notFound__button-icon']}`}>⌂</span>
                    Return to Home
                </a>
            </div>
        </section>  
    )
}



export default NotFound