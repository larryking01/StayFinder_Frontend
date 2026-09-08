import styles from './reservationWidget.module.scss'
import { MapPin, User, CalendarDays } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'

import { 
         toggleOpenDayPicker, 
         toggleOpenLocationSuggestions, 
         toggleOpenTravellersMenu, 
         closeReservationControls,
         setIntendedDestination
        } from '../../store/features/reservationSlice/reservation.slice'

import { 
         selectOpenDayPicker, 
         selectOpenLocationSuggestions, 
         selectOpenTravellersMenu,
         selectIntendedDestination, 
         selectIntendedTripDates, 
         selectIntendedAdultTravellers,
         selectIntendedChildTravellers, 
         selectIntendedNumberOfRooms 
        } from '../../store/features/reservationSlice/reservation.selectors'

import LocationSuggestions from '../locationSuggestions/locationSuggestions'
import DayPickerComponent from '../dayPicker/dayPicker'
import TravellersMenu from '../travellersMenu/travellersMenu'
import { formatTripDates } from '../../utils/formatTripDates'












const ReservationWidget = () => {


    const [searchTerm, setSearchTerm] = useState<string>('')
    const dispatch = useAppDispatch()
    const showLocationSuggestions = useAppSelector( selectOpenLocationSuggestions )
    const showDayPicker = useAppSelector( selectOpenDayPicker )
    const showTravellersMenu = useAppSelector( selectOpenTravellersMenu )
    const intendedDestination = useAppSelector( selectIntendedDestination )
    const intendedTripDates = useAppSelector( selectIntendedTripDates )
    const intendedChildTravellers = useAppSelector( selectIntendedChildTravellers )
    const intendedAdultTravellers = useAppSelector( selectIntendedAdultTravellers )
    const intendedRooms = useAppSelector( selectIntendedNumberOfRooms )
    const navigate = useNavigate()



    const handleUpdateSearchTerm = (event: any) => {
        dispatch(setIntendedDestination(null))
        setSearchTerm(event.target.value)
    }

    const displayLocationSuggestions = () => {
        dispatch(toggleOpenLocationSuggestions())
    }


    const displayDatePicker = () => {
        dispatch(toggleOpenDayPicker())
    }


    const displayTravellersMenu = () => {
        dispatch(toggleOpenTravellersMenu())
    }


    const renderedTripDates = intendedTripDates ? 
        formatTripDates( intendedTripDates.from, intendedTripDates.to)
        :
        ''


    const renderedTravellersAndRooms = () => {
        let adultTravellersText = 'adults'
        let childTravellersText = 'children'
        let roomsText = 'rooms'


        if( intendedAdultTravellers === 1 ) {
            adultTravellersText = 'adult'
        }

        if( intendedChildTravellers === 1 ) {
            childTravellersText = 'child'
        }

        if( intendedRooms === 1 ) {
            roomsText = 'room'
        }

        let renderedText = `${ intendedRooms } ${ roomsText }, ${ intendedAdultTravellers } ${ adultTravellersText }, ${ intendedChildTravellers } ${ childTravellersText }`
        return renderedText
    }


    const submitHotelPreferences = (event: any) => {
        event.preventDefault()
        dispatch(closeReservationControls())

        if(!intendedDestination && !searchTerm) {
            alert("Enter a destination to start searching...")
            return
        }

        // pass the intended destination to the query parameter
        const searchParams = new URLSearchParams({
            query: intendedDestination! ?? searchTerm
        })

        navigate(`/search-results?${searchParams.toString()}`)
    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    
    return (
        <main className={ styles.reservation }>
            <form onSubmit={ submitHotelPreferences } className={ styles.reservation__form }>
                <section className={ styles.reservation__wrapper }>
                    <input 
                        type="text" 
                        placeholder='Where to?' 
                        onClick={ displayLocationSuggestions } 
                        onChange={ handleUpdateSearchTerm }
                        value={ intendedDestination ?? searchTerm } 
                    />
                    <MapPin className={ styles.reservation__icon } />
                </section>

                <section className={ styles.reservation__wrapper}>
                    <input 
                        type="text"
                        placeholder="Check in - Check out"                        
                        className={ styles.reservation__options } 
                        onClick={ displayDatePicker } 
                        value={ renderedTripDates }
                     />
                    <CalendarDays className={ styles.reservation__icon } />
                </section>

                <section className={ styles.reservation__wrapper }>
                    <input 
                        type="text"
                        placeholder="Guests & rooms"                        
                        className={ styles.reservation__options } 
                        onClick={ displayTravellersMenu } 
                        value={renderedTravellersAndRooms()}
                    />
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