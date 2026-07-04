import styles from './empty.module.scss'
import { PiEmptyLight } from 'react-icons/pi'









const Empty = () => {


    
    return (
        <main className={`${styles.empty} ${styles.fadeIn}`}>
            <article className={styles.empty__card}>
                <section className={styles.empty__iconWrapper}>
                    <PiEmptyLight />
                </section>

                <section className={styles.empty__content}>
                    <h2 className={styles.empty__title}>Nothing to show</h2>
                    <p className={styles.empty__description}>New content will appear here once added</p>
                </section>
            </article>
        </main>    
    )
}





export default Empty