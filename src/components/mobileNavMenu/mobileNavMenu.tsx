import styles from './mobileNavMenu.module.scss'
import type { MobileNavMenuProps } from '../../types/componentProps/mobileNavMenuProps'
import { X, ArrowLeft, House, Info, ScrollText, UserCog } from 'lucide-react'

import { useAppSelector } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'








const MobileNavMenu = ({ toggleVisibility }: MobileNavMenuProps) => {


    const appName = useAppSelector( selectAppName )


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
                    <li>
                        <House />
                        <p>Home</p>
                    </li>

                    <li>
                        <ScrollText />
                        <p>List your hotel</p>
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
                        <button type="button">Sign In</button>
                    </li>
                </ul>
            </article>
        </main>
    )
}




export default MobileNavMenu