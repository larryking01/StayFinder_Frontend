import styles from './dayPicker.module.scss'
import { useState } from 'react'
import { DayPicker } from '@daypicker/react'
import '@daypicker/react/style.css'
import './dayPicker.scss'   // override some default daypicker styling
import useMediaQuery from '../../hooks/useMediaQuery'






const DayPickerComponent = () => {

    const [ selectedDate, setSelectedDate ] = useState()

    const isMobile = useMediaQuery("(max-width: 973px)")


    const handleSelectedDate = (value: any) => {
        setSelectedDate( value )
        console.log("selected date is: ", selectedDate)
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