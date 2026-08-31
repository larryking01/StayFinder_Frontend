import styles from './scrollToTop.module.scss'
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'








const ScrollToTop = () => {


    const [ showScrollToTop, setShowScrollToTop ] = useState( false )


    useEffect(() => {

        const handleScroll = () => {
            const scrollThreshold = 800 
            setShowScrollToTop( window.scrollY > scrollThreshold )
        }

        window.addEventListener('scroll', handleScroll)


        // effect cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])



    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    return (
        <button className={ `${ styles.scrollToTop } ${ showScrollToTop ? styles.visible : ''}` }>
            <ChevronUp size={ 30 } className={ styles.scrollToTop__icon } onClick={ handleScrollToTop } />
        </button>
    )

}



export default ScrollToTop