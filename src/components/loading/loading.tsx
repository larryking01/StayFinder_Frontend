import styles from './loading.module.scss'











const Loading = () => {


    
    return (
        <main className={ styles.loading }>
            <article className={ styles.loading__modal }>
                <section className={ styles.loading__pulseDivsContainer }>
                        <div className={ styles['pulseDiv--blue'] }></div>

                        <div className={ styles['pulseDiv--red'] }></div>

                        <div className={ styles['pulseDiv--green'] }></div>

                        <div className={ styles['pulseDiv--yellow'] }></div>
                </section>

                <section className={ styles.loading__description }>
                    <p>loading...</p>
                </section>
            </article>
        </main>
    )
}



export default Loading
