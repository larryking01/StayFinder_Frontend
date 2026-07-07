import styles from './reservationForm.module.scss'
import { MapPin, User, CalendarDays } from 'lucide-react'
import DayPickerComponent from '../dayPicker/dayPicker'

import { useState } from 'react'








const ReservationForm = () => {


    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)


    const handleOpenDatePicker = () => {
        setOpenDatePicker( !openDatePicker )
    }


    
    return (
        <main className={ styles.reservation }>
            <form className={ styles.reservation__form }>
                <section className={ styles.reservation__wrapper }>
                    <input type="text" placeholder='Where to?' className={ styles.reservation__locationInput } />
                    <MapPin className={ styles.reservation__icon } />
                </section>

                <section className={ styles.reservation__wrapper}>
                    <button type="button" className={ styles.reservation__options } onClick={ handleOpenDatePicker }>
                        Length of stay
                    </button>
                    <CalendarDays className={ styles.reservation__icon } />
                    
                </section>

                <section className={ styles.reservation__wrapper }>
                    <button type="button" className={ styles.reservation__options }>Travellers</button>
                    <User className={ styles.reservation__icon } />
                </section>

                <button type='submit' className={ styles.reservation__submitBtn }>Search</button>
            </form>


            { openDatePicker && <DayPickerComponent />}
        </main>
    )
}


export default ReservationForm