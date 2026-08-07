import styles from './reservationWidget.module.scss'
import { MapPin, User, CalendarDays } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { toggleOpenDayPicker, toggleOpenLocationSuggestions, toggleOpenTravellersMenu, closeReservationControls } from '../../store/features/reservationSlice/reservation.slice'
import { selectOpenDayPicker, selectOpenLocationSuggestions, selectOpenTravellersMenu } from '../../store/features/reservationSlice/reservation.selectors'
import LocationSuggestions from '../locationSuggestions/locationSuggestions'
import DayPickerComponent from '../dayPicker/dayPicker'
import TravellersMenu from '../travellersMenu/travellersMenu'










const ReservationWidget = () => {



    const dispatch = useAppDispatch()
    const showLocationSuggestions = useAppSelector( selectOpenLocationSuggestions )
    const showDayPicker = useAppSelector( selectOpenDayPicker )
    const showTravellersMenu = useAppSelector( selectOpenTravellersMenu )
    const navigate = useNavigate()


    const displayLocationSuggestions = () => {
        dispatch(toggleOpenLocationSuggestions())
    }


    const displayDatePicker = () => {
        dispatch(toggleOpenDayPicker())
    }


    const displayTravellersMenu = () => {
        dispatch(toggleOpenTravellersMenu())
    }


    const submitHotelPreferences = (event: any) => {
        event.preventDefault()
        dispatch(closeReservationControls())
        // navigate('/searchResults/Movempick Ambassador Hotel')
    }


    
    return (
        <main className={ styles.reservation }>
            <form onSubmit={ submitHotelPreferences } className={ styles.reservation__form }>
                <section className={ styles.reservation__wrapper }>
                    <input type="text" placeholder='Where to?' className={ styles.reservation__locationInput } onClick={ displayLocationSuggestions } />
                    <MapPin className={ styles.reservation__icon } />
                </section>

                <section className={ styles.reservation__wrapper}>
                    <button type="button" className={ styles.reservation__options } onClick={ displayDatePicker }>
                        Length of stay
                    </button>
                    <CalendarDays className={ styles.reservation__icon } />
                </section>

                <section className={ styles.reservation__wrapper }>
                    <button type="button" className={ styles.reservation__options } onClick={ displayTravellersMenu }>Travellers</button>
                    <User className={ styles.reservation__icon } />
                </section>

                <button type='submit' className={ styles.reservation__submitBtn }>Search</button>
            </form>

            { showLocationSuggestions && <LocationSuggestions /> }

            { showDayPicker && <DayPickerComponent /> }

            { showTravellersMenu && <TravellersMenu /> }

        </main>
    )
}


export default ReservationWidget