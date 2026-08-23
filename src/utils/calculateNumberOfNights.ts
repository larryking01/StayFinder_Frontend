import { formatStayDurationDate } from "./formatStayDurationDate"






export const calculateNumberOfNights = (startDate: Date | undefined, endDate: Date | undefined) => {
    if(!startDate || !endDate ) {
        return
    }

    let formattedStartAndEndDates = formatStayDurationDate(startDate, endDate)

    let nightText = 'nights'
    const millisecondsPerDay = 1000 * 60 * 60 * 24 
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime()

    // guard against case where end date comes before the start date
    if( differenceInMilliseconds < 0 ) {
        return 'Invalid dates provided'
    }

    const numberOfNights = differenceInMilliseconds / millisecondsPerDay

    if( numberOfNights === 1 ) {
        nightText = 'night'
    }

    const tripDatesAndNumberOfNights = `${ formattedStartAndEndDates } (${ numberOfNights } ${ nightText })`
    return tripDatesAndNumberOfNights
}

