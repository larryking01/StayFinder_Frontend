import styles from './navbar.module.scss'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router'

import MobileNavMenu from '../mobileNavMenu/mobileNavMenu'
import { useAppSelector } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'









const Navbar = () => {


    const [ openMobileNavbar, setOpenMobileNavbar ] = useState( false )
    const location = useLocation()
    const navigate = useNavigate()
    const appName = useAppSelector( selectAppName )
    const [ activeRoute, setActiveRoute ] = useState<string | null>(null)



    // get the current route and apply the active styling to the corresponding nav link
    useEffect(() => {
        let currentRoute = location.pathname 
        setActiveRoute(currentRoute)

    }, [ location ])


    // prevent device from scrolling when responsive navbar is open on mobile devices
    useEffect(() => {
        if(openMobileNavbar) {
            document.body.classList.add("no-scroll")
        }
        else {
            document.body.classList.remove("no-scroll")
        }


        return () => {
            document.body.classList.remove("no-scroll")
        }

    }, [ openMobileNavbar ])

    
    const handleOpenMobileNavbar = () => {
        setOpenMobileNavbar( !openMobileNavbar )
    }


    const navigateToSignIn = () => {
        navigate("/accounts")
    }


    const navigateTo = (route: string) => {
        navigate(`/${ route }`)
    }



    return (
        <nav className={ styles.navbar }>
            <section className={ styles.navbar__brand }>
                <h3 onClick={ () => navigateTo("home")}>{ appName }</h3>
            </section>

            <section className={ styles.navbar__menu }>
                <ul>
                    <li>
                        <NavLink to="/" className={ activeRoute === '/' ? 'nav-link-active' : 'nav-link-default' }>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/list-your-hotel" className={ activeRoute === '/list-your-hotel' ? 'nav-link-active' : 'nav-link-default' }>
                            List your hotel
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/support" className={ activeRoute === '/support' ? 'nav-link-active' : 'nav-link-default' }>
                            Support
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about-us" className={ activeRoute === '/about-us' ? 'nav-link-active' : 'nav-link-default' }>
                            About Us
                        </NavLink>
                    </li>

                    <li>
                        <button type="button" onClick={ navigateToSignIn }>
                            Sign In
                        </button>
                    </li>
                </ul>
            </section>

            <section className={ styles.navbar__hamburger } onClick={ handleOpenMobileNavbar }>
                <Menu size={ 30 } />
            </section>


            {
                openMobileNavbar && <MobileNavMenu toggleVisibility={ handleOpenMobileNavbar } />
            }

        </nav>
    )

    
}



export default Navbar