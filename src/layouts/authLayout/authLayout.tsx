import styles from './authLayout.module.scss'
import { Outlet } from 'react-router'








const AuthLayout = () => {



    return (
        <main className={ styles.container }>
            <article className={ styles.authLayout }>
                <section className={ styles.authLayout__coverImageDisplay }>
                    <div className={ styles.intro }>
                        <h3>Welcome to StayFinder</h3>
                        <p>Discover exceptional hotels, manage your bookings, and plan your next unforgettable stay.</p>
                    </div>
                </section>

                <section className={ styles.authLayout__authRoute }>
                    <Outlet />
                </section>
            </article>
        </main>
    )
}




export default AuthLayout