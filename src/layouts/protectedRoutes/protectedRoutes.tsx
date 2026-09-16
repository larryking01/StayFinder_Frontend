import { Outlet, Navigate } from "react-router"
import { useAppSelector } from "../../hooks/useStore"
import { selectCurrentUser, selectAuthInitializedState } from "../../store/features/userSlice/user.selectors"
import Loading from "../../components/loading/loading"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import ScrollToTop from "../../components/scrollToTop/scrollToTop"
import styles from './protectedRoutes.module.scss'











const ProtectedRoutesLayout = () => {


    const authInitialized = useAppSelector( selectAuthInitializedState )
    const authenticatedUser = useAppSelector( selectCurrentUser )


    // return loading if supabase has not finished checking whether a user session exists or not
    if(!authInitialized) {
        return (
            <Loading />
        )
    }


    // redirect to login page if no authenticated user session is found
    if(!authenticatedUser) {
        return (
            <Navigate to="/accounts" replace />
        )
    }


    return (
        <main className={ styles.layout }>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </main>
    )
}



export default ProtectedRoutesLayout