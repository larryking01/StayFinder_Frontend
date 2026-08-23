export const formatStayDurationDate = (startDate: Date | undefined, endDate: Date | undefined) => {
    if( !startDate || !endDate ) {
        return 'Invalid dates provided'
    }

    let formattedStartDate = ''
    let formattedEndDate = ''
    let formattedStartAndEndDates = ''

    formattedStartDate = startDate.toString()


    // when only the start date has been selected
    if( startDate.getTime() === endDate.getTime() ) {
        formattedEndDate = 'Select date'
        formattedStartAndEndDates = `${ formattedStartDate.slice(0, 10)} - ${ formattedEndDate }`

        return formattedStartAndEndDates
    }


    // different dates have been provided for start and end dates
    formattedEndDate = endDate.toString()
    formattedStartAndEndDates = `${ formattedStartDate.slice(0, 10)} - ${ formattedEndDate.slice(0, 10)}`

    return formattedStartAndEndDates
}