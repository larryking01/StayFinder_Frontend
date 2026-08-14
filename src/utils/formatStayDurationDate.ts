export const formatStayDurationDate = (date: Date | undefined) => {
    if( !date ) {
        return
    }

    let formattedDate = date.toString()
    return formattedDate.slice(0, 10)
}