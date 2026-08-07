import styles from './travellersMenu.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { 
        incrementIntendedNumberOfAdultTravellers, decrementIntendedNumberOfAdultTravellers,
        incrementIntendedNumberOfChildTravellers, decrementIntendedNumberOfChildTravellers,
        incrementIntendedNumberOfRooms, decrementIntendedNumberOfRooms, toggleOpenTravellersMenu         
        } from '../../store/features/reservationSlice/reservation.slice'

import { selectIntendedAdultTravellers, selectIntendedChildTravellers, 
         selectIntendedNumberOfRooms, selectIntendedReservationDetails } from '../../store/features/reservationSlice/reservation.selectors'










const TravellersMenu = () => {


    const dispatch = useAppDispatch()
    const intendedChildTravellers = useAppSelector( selectIntendedChildTravellers )
    const intendedAdultTravellers = useAppSelector( selectIntendedAdultTravellers )
    const intendedRooms = useAppSelector( selectIntendedNumberOfRooms )
    const intendedReservationDetails = useAppSelector( selectIntendedReservationDetails )


    const handleCloseTravellersMenu = () => {
        console.log("intended reservation details = ", intendedReservationDetails)
        dispatch(toggleOpenTravellersMenu())
    }

    const handleChildTravellerIncrement = () => {
        dispatch(incrementIntendedNumberOfChildTravellers())
    }

    const handleChildTravellerDecrement = () => {
        dispatch(decrementIntendedNumberOfChildTravellers())
    }

    const handleAdultTravellerIncrement = () => {
        dispatch(incrementIntendedNumberOfAdultTravellers())
    }

    const handleAdultTravellerDecrement = () => {
        dispatch(decrementIntendedNumberOfAdultTravellers())
    }

    const handleRoomsIncrement = () => {
        dispatch(incrementIntendedNumberOfRooms())
    }

    const handleRoomsDecrement = () => {
        dispatch(decrementIntendedNumberOfRooms())
    }






    return (
        <main className={ styles.travellersMenu }>
            <section className={ styles.travellersMenu__wrapper }>
                <article className={ styles.travellerItem }>
                    <h3>Adults</h3>
                    <div className={ styles.controls }>
                        <button onClick={ handleAdultTravellerDecrement }>-</button>
                        <p>{ intendedAdultTravellers }</p>
                        <button onClick={ handleAdultTravellerIncrement }>+</button>
                    </div>
                </article>


                <article className={ styles.travellerItem }>
                    <h3>Children</h3>
                    <div className={ styles.controls }>
                        <button onClick={ handleChildTravellerDecrement }>-</button>
                        <p>{ intendedChildTravellers }</p>
                        <button onClick={ handleChildTravellerIncrement }>+</button>
                    </div>
                </article>


                <article className={ styles.travellerItem }>
                    <h3>Rooms</h3>
                    <div className={ styles.controls }>
                        <button onClick={ handleRoomsDecrement }>-</button>
                        <p>{ intendedRooms }</p>
                        <button onClick={ handleRoomsIncrement }>+</button>
                    </div>
                </article>


                <article className={ styles.submitBtn }>
                    <button type="button" onClick={ handleCloseTravellersMenu }>Done</button>
                </article>
            </section>
        </main>
    )
}





export default TravellersMenu