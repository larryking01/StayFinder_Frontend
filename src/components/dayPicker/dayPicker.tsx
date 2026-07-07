import styles from './dayPicker.module.scss'
import { useState } from 'react'
import { DayPicker } from '@daypicker/react'
import '@daypicker/react/style.css'







const DayPickerComponent = () => {

    const [ selected, setSelected ] = useState()



    const handleSelectedDate = (value: any) => {
        setSelected( value )
        console.log("selected date is: ", selected)
    }   



    return (
        <main className={ styles.dayPicker }>
            <DayPicker 
                animate
                fixedWeeks
                selected={ selected }
                onSelect={ handleSelectedDate }
                mode="range"
                navLayout="around"
                numberOfMonths={ 2 }
                captionLayout="label"
                footer={ selected ? 'Selected' : 'None selected'}
            />
        </main>
    )
}



export default DayPickerComponent