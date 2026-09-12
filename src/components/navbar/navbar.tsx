import styles from './navbar.module.scss'
import { Menu, UserRound, CircleUserRound } from 'lucide-react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router'

import MobileNavMenu from '../mobileNavMenu/mobileNavMenu'
import UserAvatar from '../userAvatar/userAvatar'
import { useAppSelector } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'
import avatar from '../../assets/images/hero_1.jpg'









const Navbar = () => {


    const [ openMobileNavbar, setOpenMobileNavbar ] = useState( false )
    const [ openManageAccountDialog, setOpenManageAccountDialog ] = useState( false )
    const [isLoggedIn, setIsLoggedIn] = useState( true )
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


    const handleOpenManageAccountDialog = () => {
        setOpenManageAccountDialog(!openManageAccountDialog)
    }


    const handleManageAccountItemClicked = () => {
        setOpenManageAccountDialog( false )
    }


    const navigateToSignIn = () => {
        navigate("/accounts")
    }



    return (
        <nav className={ styles.navbar }>
            <section className={ styles.navbar__brand }>
                <NavLink to='/' className={ styles.brandText }>{ appName }</NavLink>
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

                    {
                        isLoggedIn ?
                            <div onClick={ handleOpenManageAccountDialog }>
                                <UserAvatar firstName='Larry'/>                            
                            </div>
                            :
                            <li>
                                <button type="button" onClick={ navigateToSignIn }>
                                    Sign In
                                </button>
                            </li>

                    }
                </ul>
            </section>

            <section className={ styles.navbar__hamburger } >
                { 
                    isLoggedIn ? 
                        <div>
                            <UserAvatar firstName='Larry' /> 
                        </div>
                        : 
                        <UserRound size={ 30 } onClick={ navigateToSignIn }/> 
                }
                <Menu size={ 30 } onClick={ handleOpenMobileNavbar } className={ styles.menuIcon }/>
            </section>

            {
                openManageAccountDialog && 
                <div className={ styles.navbar__manageAccountDialog }>
                    {
                        [1, 2, 3, 4, 5].map(item => (
                            <article className={ styles.manageAccountItem } key={ item } onClick={ handleManageAccountItemClicked }>
                                <UserRound size={ 20 }/>
                                <p>My account</p>
                            </article>
                        ))
                    }
                </div>
            }

            {
                openMobileNavbar && <MobileNavMenu toggleVisibility={ handleOpenMobileNavbar } />
            }

        </nav>
    )

    
}



export default Navbar