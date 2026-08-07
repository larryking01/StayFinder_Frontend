interface ReservationState {
    openLocationSuggestions: boolean,
    openDayPicker: boolean,
    openTravellersMenu: boolean
}



export const reservationInitialState: ReservationState = {
    openLocationSuggestions: false,
    openDayPicker: false,
    openTravellersMenu: false
}