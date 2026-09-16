import styles from './navbar.module.scss'
import { Menu, UserRound } from 'lucide-react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router'

import MobileNavMenu from '../mobileNavMenu/mobileNavMenu'
import UserAvatar from '../userAvatar/userAvatar'
import MobileAccountMenu from '../mobileAccountMenu/mobileAccountMenu'
import { useAppSelector, useAppDispatch } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'
import { logoutUser } from '../../store/features/userSlice/user.thunks'
import { selectCurrentUser } from '../../store/features/userSlice/user.selectors'
import { accountMenuItems } from '../../data/accountMenuItems'
import { protectedRoutes } from '../../data/protectedRoutes'








const Navbar = () => {


    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState( false )
    const [ isAccountMenuOpen, setIsAccountMenuOpen ] = useState( false )
    const [ isMobileAccountMenuOpen, setIsMobileAccountMenuOpen ] = useState( false )
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const appName = useAppSelector( selectAppName )
    const authenticatedUser = useAppSelector( selectCurrentUser )
    const [ activeRoute, setActiveRoute ] = useState<string | null>(null)



    // get the current route and apply the active styling to the corresponding nav link
    useEffect(() => {
        let currentRoute = location.pathname 
        setActiveRoute(currentRoute)

    }, [ location ])


    // prevent device from scrolling when responsive navbar is open on mobile devices
    useEffect(() => {
        if(isMobileNavOpen || isMobileAccountMenuOpen ) {
            document.body.classList.add("no-scroll")
        }
        else {
            document.body.classList.remove("no-scroll")
        }


        return () => {
            document.body.classList.remove("no-scroll")
        }

    }, [ isMobileNavOpen, isMobileAccountMenuOpen ])

    
    const handleIsMobileNavOpen = () => {
        setIsMobileNavOpen( !isMobileNavOpen )
    }


    const handleIsAccountMenuOpen = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen)
    }


    const handleIsMobileAccountMenuOpen = () => {
        setIsMobileAccountMenuOpen(!isMobileAccountMenuOpen)
    }


    const handleManageAccountItemClicked = (route: string) => {
        setIsAccountMenuOpen( false )


        if(route === '/logout') {
            dispatch(logoutUser())

            if(protectedRoutes.some(route => location.pathname.includes(route))) {
                navigate('/')
            }

            return
        }

        navigate(route)
    }


    const navigateToSignIn = () => {
        navigate("/accounts", {
            state: {
                from: location
            }
        })
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
                        authenticatedUser ?
                            <div onClick={ handleIsAccountMenuOpen }>
                                <UserAvatar firstName={ authenticatedUser.firstName }/>                            
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
                    authenticatedUser ? 
                        <div onClick={ handleIsMobileAccountMenuOpen }>
                            <UserAvatar firstName={ authenticatedUser.firstName } /> 
                        </div>
                        : 
                        <UserRound size={ 30 } onClick={ navigateToSignIn }/> 
                }
                <Menu size={ 30 } onClick={ handleIsMobileNavOpen } className={ styles.menuIcon }/>
            </section>

            {
                isAccountMenuOpen && 
                <div className={ styles.navbar__manageAccountDialog }>
                    {
                        accountMenuItems.map(item => {
                            let Icon = item.icon 

                            return (
                                <article 
                                    className={ styles.manageAccountItem } 
                                    key={ item.name } 
                                    onClick={ () => handleManageAccountItemClicked( item.routePath )}
                                >
                                    <Icon size={ 20 }/>
                                    <p>{ item.name }</p>
                                </article>
                            )}
                        )
                    }
                </div>
            }

            {
                isMobileNavOpen && <MobileNavMenu toggleVisibility={ handleIsMobileNavOpen } />
            }

            {
                isMobileAccountMenuOpen && <MobileAccountMenu toggleVisibility={ handleIsMobileAccountMenuOpen } />
            }

        </nav>
    )

    
}



export default Navbar