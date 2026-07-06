import styles from './navbar.module.scss'
import { Menu, X, ArrowLeft, House, Info, ScrollText, UserCog } from 'lucide-react'












const Navbar = () => {



    return (
        <nav className={ styles.navbar }>
            <section className={ styles.navbar__brand }>
                <h3>StayFinder</h3>
            </section>

            <section className={ styles.navbar__menu }>
                <ul>
                    <li>Home</li>
                    <li>Support</li>
                    <li>About Us</li>
                    <li>Bookings</li>
                    <li>
                        <button type="button">Sign In</button>
                    </li>
                </ul>
            </section>

            <section className={ styles.navbar__hamburger }>
                <Menu size={ 30 } />
            </section>

            <section className={ styles.navbar__responsiveMenu }>
                <article className={ styles.currentRouteAndCloseBtn }>
                    <div className={ styles.currentRouteDisplay }>
                        <ArrowLeft className={ styles.backIcon }/>
                        <h3>Home</h3>
                    </div>

                    <div className={ styles.appLogo }>
                        <h3>StayFinder</h3>
                    </div>

                    <X size={ 30 } className={ styles.closeIcon }/>
                </article>

                <article className={ styles.underLine }></article>


                <article className={ styles.navLinks }>
                    <ul>
                        <li>
                            <House />
                            <p>Home</p>
                        </li>

                        <li>
                            <UserCog />
                            <p>Support</p>
                        </li>

                        <li>
                            <Info />
                            <p>About Us</p>
                        </li>

                        <li>
                            <ScrollText />
                            <p>Bookings</p>
                        </li>

                        <li>
                            <button type="button">Sign In</button>
                        </li>
                    </ul>
                </article>
            </section>
        </nav>
    )

    
}



export default Navbar