import styles from './dayPicker.module.scss'
import { useState } from 'react'
import { DayPicker } from '@daypicker/react'
import '@daypicker/react/style.css'
import './dayPicker.scss'   // override some default daypicker styling







const DayPickerComponent = () => {

    const [ selectedDate, setSelectedDate ] = useState()


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
                numberOfMonths={ 2 }
                captionLayout="label"
                footer={ selectedDate ? 'Date selected' : 'None selected'}
            />
        </main>
    )
}



export default DayPickerComponent