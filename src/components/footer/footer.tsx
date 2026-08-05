import styles from './footer.module.scss'
import { NavLink } from 'react-router'
import { useAppSelector } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";








const Footer = () => {


    const appName = useAppSelector( selectAppName )



    return (
        <main className={ styles.footer }>
            <footer className={ styles.footer__wrapper }>
                <section className={ styles.footer__column }>
                        <h3>{ appName }</h3>
                </section>

                <section className={ styles.footer__column }>
                        <h3>Quick links</h3>
                        <ul>
                            <NavLink to='/' className={`${styles["nav-item"]}`} >Home</NavLink>
                            {/* <NavLink className="nav-link-default">Hotels</NavLink> */}
                            <NavLink to="/my-bookings" className={`${styles["nav-item"]}`}>Bookings</NavLink>
                            <NavLink to="/about-us" className={`${styles["nav-item"]}`}>About Us</NavLink>
                        </ul>
                </section>

                <section className={ styles.footer__column }>
                        <h3>Support</h3>
                        <ul>
                            <NavLink to='/support' className={`${styles["nav-item"]}`}>Help Center</NavLink>
                            <NavLink to='/support' className={`${styles["nav-item"]}`}>Privacy Policy</NavLink>
                            <NavLink to='/support' className={`${styles["nav-item"]}`}>Terms</NavLink>
                        </ul>
                </section>

                <section className={ styles.footer__column }>
                        <h3>Contact</h3>
                        <ul>
                            <li className={`${styles["nav-item"]}`}>support@{ appName.toLowerCase() }.com</li>
                            <li className={`${styles["nav-item"]}`}>+233 552 531 004</li>
                            <li className={`${styles["nav-item"]}`}>Accra, Ghana</li>
                        </ul>
                </section>
            </footer>   

            <section className={ styles.footer__socialLinks }>
                <p className={`${styles["nav-item"]}`}> <FaFacebook size={ 30 }/> </p>
                <p className={`${styles["nav-item"]}`}> <FaInstagram size={ 30 }/> </p>
                <p className={`${styles["nav-item"]}`}> <FaTwitter size={ 30 }/> </p>
            </section>

            <section className={ styles.footer__copyrights }>
                <p>© 2026 { appName }. All rights reserved.</p>
            </section>
        </main>
    )

    
}



export default Footer