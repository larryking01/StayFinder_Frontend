import styles from './reservationWidget.module.scss'
import { MapPin, User, CalendarDays } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import LocationSuggestions from '../locationSuggestions/locationSuggestions'
import DayPickerComponent from '../dayPicker/dayPicker'
import TravellersMenu from '../travellersMenu/travellersMenu'










const ReservationWidget = () => {



    const [ showLocationSuggestions, setShowLocationSuggestions ] = useState<boolean>(false)
    const [ showDayPicker, setShowDayPicker ] = useState<boolean>(false)
    const [ showTravellersMenu, setShowTravellersMenu ] = useState<boolean>(false)
    const navigate = useNavigate()


    const displayLocationSuggestions = () => {
        setShowDayPicker( false )
        setShowTravellersMenu( false )
        setShowLocationSuggestions( !showLocationSuggestions )
    }


    const displayDayPicker = () => {
        setShowLocationSuggestions( false )
        setShowTravellersMenu( false )
        setShowDayPicker( !showDayPicker )
    }


    const displayTravellersMenu = () => {
        setShowLocationSuggestions( false )
        setShowDayPicker( false )
        setShowTravellersMenu( !showTravellersMenu )
    }


    const submitHotelPreferences = (event: any) => {
        event.preventDefault()
        setShowLocationSuggestions( false )
        setShowDayPicker( false )
        setShowTravellersMenu( false )

        navigate('/searchResults/Movempick Ambassador Hotel')
    }


    
    return (
        <main className={ styles.reservation }>
            <form onSubmit={ submitHotelPreferences } className={ styles.reservation__form }>
                <section className={ styles.reservation__wrapper }>
                    <input type="text" placeholder='Where to?' className={ styles.reservation__locationInput } onClick={ displayLocationSuggestions } />
                    <MapPin className={ styles.reservation__icon } />
                </section>

                <section className={ styles.reservation__wrapper}>
                    <button type="button" className={ styles.reservation__options } onClick={ displayDayPicker }>
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