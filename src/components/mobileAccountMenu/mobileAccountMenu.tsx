import styles from './mobileAccountMenu.module.scss'
import { X, ArrowLeft } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router'

import type { MobileNavMenuProps } from '../../types/componentProps/mobileNavMenuProps'
import { useAppSelector, useAppDispatch } from '../../hooks/useStore'
import { logoutUser } from '../../store/features/userSlice/user.thunks'
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors'
import { accountMenuItems } from '../../data/accountMenuItems'
import UserAvatar from '../userAvatar/userAvatar'
import { protectedRoutes } from '../../data/protectedRoutes'










const MobileAccountMenu = ({ toggleVisibility }: MobileNavMenuProps) => {


    const appName = useAppSelector( selectAppName )
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()


    const navigateToRoute = (route: string) => {
        // close the mobile nav menu and navigate to selected route    
        toggleVisibility()    

        if(route === '/logout') {
            dispatch(logoutUser())

            if(protectedRoutes.some(route => location.pathname.includes(route))) {
                navigate('/')
            }
            
            return
        }

        navigate(route)
    }



    return (
        <main  className={ styles.responsiveMenu }>
            <article className={ styles.currentRouteAndCloseBtn }>
                <div className={ styles.appLogoAndBackIcon }>
                    <ArrowLeft className={ styles.backIcon } onClick={ toggleVisibility }/>
                    <h3 onClick={() => navigateToRoute("/")}>{ appName }</h3>
                </div>

                <X size={ 30 } className={ styles.closeIcon } onClick={ toggleVisibility }/>
            </article>

            <article className={ styles.underLine }></article>

            <article className={ styles.avatar }>
                <UserAvatar firstName='Larry' />
                <p>Larry Williams</p>
            </article>

            <article className={ styles.navLinks }>
                <ul>
                    {
                        accountMenuItems.map(item => {
                            let Icon = item.icon

                            return (
                            <li 
                                className={ styles.manageAccountItem } 
                                key={ item.name } 
                                onClick={() => navigateToRoute(item.routePath)}
                                >
                                <Icon size={ 20 }/>
                                <p>{ item.name }</p>
                            </li>
                            )
                        })
                    }
                </ul>
            </article>
        </main>
    )
}




export default MobileAccountMenu