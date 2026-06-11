import styles from './footer.module.scss'







const Footer = () => {



    return (
        <main className={ styles.footer }>
            <footer className={ styles.footer__wrapper }>
                <section className={ styles.footer__column }>
                        <h3>StayFinder</h3>
                </section>

                <section className={ styles.footer__column }>
                        <h3>Quick links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Hotels</li>
                            <li>Bookings</li>
                            <li>About Us</li>
                        </ul>
                </section>

                <section className={ styles.footer__column }>
                        <h3>Support</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms</li>
                        </ul>
                </section>

                <section className={ styles.footer__column }>
                        <h3>Contact</h3>
                        <ul>
                            <li>support@stayfinder.com</li>
                            <li>+233 XX XXX XXXX</li>
                            <li>Accra, Ghana</li>
                        </ul>
                </section>
            </footer>   

            <section className={ styles.footer__socialLinks }>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
            </section>

            <section className={ styles.footer__copyrights }>
                <p>© 2026 StayFinder. All rights reserved.</p>
            </section>
        </main>
    )

    
}



export default Footer