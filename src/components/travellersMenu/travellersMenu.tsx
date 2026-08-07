import styles from './travellersMenu.module.scss'
import { useAppDispatch } from '../../hooks/useStore'
import { toggleOpenTravellersMenu } from '../../store/features/reservationSlice/reservation.slice'









const TravellersMenu = () => {


    const dispatch = useAppDispatch()


    const closeTravellersMenu = () => {
        dispatch(toggleOpenTravellersMenu())
    }



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
                    <button type="button" onClick={ closeTravellersMenu }>Done</button>
                </article>
            </section>
        </main>
    )
}





export default TravellersMenu