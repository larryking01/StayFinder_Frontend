import styles from './travellersMenu.module.scss'







const TravellersMenu = () => {




    return (
        <main className={ styles.travellersMenu }>
            <section className={ styles.travellersMenu__wrapper }>
                <article className={ styles.travellerItem }>
                    <h3>Adults</h3>
                    <div className={ styles.controls }>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </article>


                <article className={ styles.travellerItem }>
                    <h3>Children</h3>
                    <div className={ styles.controls }>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </article>


                <article className={ styles.travellerItem }>
                    <h3>Rooms</h3>
                    <div className={ styles.controls }>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </article>


                <article className={ styles.submitBtn }>
                    <button type="button">Done</button>
                </article>
            </section>
        </main>
    )
}





export default TravellersMenu