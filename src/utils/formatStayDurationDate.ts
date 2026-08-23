export const formatStayDurationDate = (startDate: Date | undefined, endDate: Date | undefined) => {
    if( !startDate || !endDate ) {
        return
    }

    let formattedStartDate = startDate.toString()
    let formattedEndDate = endDate.toString()
    let formattedStartAndEndDates = `${ formattedStartDate.slice(0, 10)} - ${ formattedEndDate.slice(0, 10)}`

    return formattedStartAndEndDates
}