import styles from './empty.module.scss'
import { PiEmptyLight } from 'react-icons/pi'

import type { EmptyCardProps } from '../../types/componentProps/emptyCardProps'







const Empty = ({ emptyCardInfo }: EmptyCardProps) => {

    let title = emptyCardInfo.title ?? 'Nothing to show'
    let content = emptyCardInfo.content ?? 'New content will appear here once added'


    
    return (
        <main className={`${styles.empty} ${styles.fadeIn}`}>
            <article className={styles.empty__card}>
                <section className={styles.empty__iconWrapper}>
                    <PiEmptyLight />
                </section>

                <section className={styles.empty__content}>
                    <h2 className={styles.empty__title}>{ title }</h2>
                    <p className={styles.empty__description}>{ content }</p>
                </section>
            </article>
        </main>    
    )
}





export default Empty