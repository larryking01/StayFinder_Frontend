export const formatTripDates = (startDate: Date | undefined, endDate: Date | undefined) => {
    if( !startDate || !endDate ) {
        return 'Invalid dates provided'
    }

    let formattedStartDate = ''
    let formattedEndDate = ''
    let formattedTripDates = ''

    formattedStartDate = startDate.toString()


    // when only the start date has been selected
    if( startDate.getTime() === endDate.getTime() ) {
        formattedEndDate = 'Select date'
        formattedTripDates = `${ formattedStartDate.slice(0, 10)} - ${ formattedEndDate }`

        return formattedTripDates
    }


    // different dates have been provided for start and end dates
    formattedEndDate = endDate.toString()
    formattedTripDates = `${ formattedStartDate.slice(0, 10)} - ${ formattedEndDate.slice(0, 10)}`

    return formattedTripDates
}