import styles from './layout.module.scss'
import { Outlet } from 'react-router'


import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'








const Layout = () => {


    return (
        <main className={ styles.layout }>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}



export default Layout