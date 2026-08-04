import styles from './mobileNavMenu.module.scss'
import { X, ArrowLeft, House, Info, ScrollText, UserCog } from 'lucide-react'
import { useNavigate } from 'react-router'

import type { MobileNavMenuProps } from '../../types/componentProps/mobileNavMenuProps'
import { useAppSelector } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'








const MobileNavMenu = ({ toggleVisibility }: MobileNavMenuProps) => {


    const appName = useAppSelector( selectAppName )
    const navigate = useNavigate()


    const navigateToRoute = (route: string) => {
        // close the mobile nav menu and navigate to selected route    
        toggleVisibility()    
        navigate( route )
    }



    return (
        <main  className={ styles.responsiveMenu }>
            <article className={ styles.currentRouteAndCloseBtn }>
                <div className={ styles.appLogoAndBackIcon }>
                    <ArrowLeft className={ styles.backIcon } onClick={ toggleVisibility }/>
                    <h3>{ appName }</h3>
                </div>

                <div className={ styles.currentRouteDisplay }>
                    <h3>Home</h3>
                </div>

                <X size={ 30 } className={ styles.closeIcon } onClick={ toggleVisibility }/>
            </article>

            <article className={ styles.underLine }></article>

            <article className={ styles.navLinks }>
                <ul>
                    <li onClick={() => navigateToRoute('/')}>
                        <House />
                        <p>Home</p>
                    </li>

                    <li onClick={() => navigateToRoute('/list-your-hotel')}>
                        <ScrollText />
                        <p>List your hotel</p>
                    </li>

                    <li onClick={() => navigateToRoute('/support')}>
                        <UserCog />
                        <p>Support</p>
                    </li>

                    <li onClick={() => navigateToRoute('/about-us')}>
                        <Info />
                        <p>About Us</p>
                    </li>

                    <li>
                        <button type="button" onClick={() => navigateToRoute('/accounts')}>Sign In</button>
                    </li>
                </ul>
            </article>
        </main>
    )
}




export default MobileNavMenu