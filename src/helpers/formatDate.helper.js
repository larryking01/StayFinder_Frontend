function formatDate(date) {
    let mutatedDate = new Date(date)
    let desiredDate = mutatedDate.toDateString()
    return desiredDate
}


function formatTime(date) {
    let mutatedTime = new Date( date ).toTimeString()
    let desiredTime = mutatedTime.split(' ')[0]
    return desiredTime.slice(0, 5)
}




export {
    formatDate,
    formatTime
}