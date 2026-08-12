import styles from './dayPicker.module.scss'
import { useState } from 'react'
import { DayPicker } from '@daypicker/react'
import type { DateRange } from '@daypicker/react'
import '@daypicker/react/style.css'
import './dayPicker.scss'   // override some default daypicker styling
import useMediaQuery from '../../hooks/useMediaQuery'
import { setIntendedStayDuration } from '../../store/features/reservationSlice/reservation.slice'
import { useAppDispatch } from '../../hooks/useStore'








const DayPickerComponent = () => {

    const [ selectedDate, setSelectedDate ] = useState<DateRange | undefined>()
    const isMobile = useMediaQuery("(max-width: 973px)")
    const dispatch = useAppDispatch()


    const handleSelectedDate = (value: DateRange | undefined) => {
        setSelectedDate( value )
        console.log("selected date = ", value)
        dispatch(setIntendedStayDuration( value ))
    }   



    return (
        <main className={ styles.dayPicker }>
            <DayPicker 
                animate
                fixedWeeks
                selected={ selectedDate }
                onSelect={ handleSelectedDate }
                mode="range"
                navLayout="around"
                numberOfMonths={ isMobile ? 1 : 2 }
                captionLayout="label"
                footer={ selectedDate ? 'Date selected' : 'None selected'}
                
            />
        </main>
    )
}



export default DayPickerComponent