import { formatTripDates } from "./formatTripDates"
import { calculateNumberOfNights } from "./calculateNumberOfNights"





export const formatTripDatesAndCalculateNumberOfNights = (startDate: Date | undefined, endDate: Date | undefined) => {
    if(!startDate || !endDate ) {
        return
    }

    const formattedTripDates = formatTripDates(startDate, endDate)
    const numberOfNights = calculateNumberOfNights(startDate, endDate)
    const tripDatesAndNumberOfNights = `${ formattedTripDates } (${ numberOfNights })`

    return tripDatesAndNumberOfNights
}
