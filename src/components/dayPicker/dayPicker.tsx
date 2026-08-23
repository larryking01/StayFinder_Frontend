import styles from './dayPicker.module.scss'
import { useState } from 'react'
import { DayPicker } from '@daypicker/react'
import type { DateRange } from '@daypicker/react'
import '@daypicker/react/style.css'
import './dayPicker.scss'   // override some default daypicker styling.
import useMediaQuery from '../../hooks/useMediaQuery'
import { setIntendedTripDates } from '../../store/features/reservationSlice/reservation.slice'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { selectIntendedTripDates } from '../../store/features/reservationSlice/reservation.selectors'
import { formatStayDurationDate } from '../../utils/formatStayDurationDate'
import { calculateNumberOfNights } from '../../utils/calculateNumberOfNights'










const DayPickerComponent = () => {

    const [ selectedDate, setSelectedDate ] = useState<DateRange | undefined>()
    const isMobile = useMediaQuery("(max-width: 973px)")
    const dispatch = useAppDispatch()
    const intendedTripDates = useAppSelector( selectIntendedTripDates )


    const handleSelectedDate = (value: DateRange | undefined) => {
        setSelectedDate( value )
        dispatch(setIntendedTripDates( value ))
    }   


    const renderedTripDates = intendedTripDates ? 
        calculateNumberOfNights(intendedTripDates.from, intendedTripDates.to)      
        :
        ''




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
                footer={ renderedTripDates }
            />
        </main>
    )
}



export default DayPickerComponent