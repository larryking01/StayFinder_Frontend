import styles from './mobileAccountMenu.module.scss'
import { X, ArrowLeft, House, Info, ScrollText, UserCog } from 'lucide-react'
import { useNavigate } from 'react-router'

import type { MobileNavMenuProps } from '../../types/componentProps/mobileNavMenuProps'
import { useAppSelector } from '../../hooks/useStore'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'










const MobileAccountMenu = ({ toggleVisibility }: MobileNavMenuProps) => {


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
                    <h3>{ appName }Mobile Account Menu</h3>
                </div>

                <X size={ 30 } className={ styles.closeIcon } onClick={ toggleVisibility }/>
            </article>

            <article className={ styles.underLine }></article>

            <article className={ styles.navLinks }>
                <ul>
                    {
                        [1, 2, 3, 4, 5].map(item => (
                            <li className={ styles.manageAccountItem } key={ item } onClick={() => navigateToRoute('/')}>
                                <Info size={ 20 }/>
                                <p>My account</p>
                            </li>
                        ))
                    }
                </ul>
            </article>
        </main>
    )
}




export default MobileAccountMenu