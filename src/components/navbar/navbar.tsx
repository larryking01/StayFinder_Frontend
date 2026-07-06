import styles from './navbar.module.scss'
import { Menu } from 'lucide-react'













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
                <Menu />
            </section>
        </nav>
    )

    
}



export default Navbar