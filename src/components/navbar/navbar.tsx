import styles from './navbar.module.scss'
import { Menu, X, ArrowLeft, House, Info, ScrollText, UserCog } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'










const Navbar = () => {


    const [ openMobileNavbar, setOpenMobileNavbar ] = useState( false )
    const navigate = useNavigate()

    
    const handleOpenMobileNavbar = () => {
        setOpenMobileNavbar( !openMobileNavbar )
    }


    const handleNavigateToSignIn = () => {
        navigate("/accounts")
    }


    const handleNavigateTo = (route: string) => {
        navigate(`/${ route }`)
    }



    return (
        <nav className={ styles.navbar }>
            <section className={ styles.navbar__brand }>
                <h3 onClick={ () => handleNavigateTo("home")}>StayFinder</h3>
            </section>

            <section className={ styles.navbar__menu }>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>Support</li>
                    <li>About Us</li>
                    <li>Bookings</li>
                    <li>
                        <button type="button" onClick={ handleNavigateToSignIn }>
                            Sign In
                        </button>
                    </li>
                </ul>
            </section>

            <section className={ styles.navbar__hamburger } onClick={ handleOpenMobileNavbar }>
                <Menu size={ 30 } />
            </section>


            {
                openMobileNavbar &&
                    <section className={ styles.navbar__responsiveMenu }>
                        <article className={ styles.currentRouteAndCloseBtn }>
                            <div className={ styles.appLogoAndBackIcon }>
                                <ArrowLeft className={ styles.backIcon } onClick={ handleOpenMobileNavbar }/>
                                <h3>StayFinder</h3>
                            </div>

                            <div className={ styles.currentRouteDisplay }>
                                <h3>Home</h3>
                            </div>

                            <X size={ 30 } className={ styles.closeIcon } onClick={ handleOpenMobileNavbar }/>
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
            }

        </nav>
    )

    
}



export default Navbar