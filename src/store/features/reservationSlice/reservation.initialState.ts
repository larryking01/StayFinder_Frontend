interface ReservationState {
    // component controls. 
    openLocationSuggestions: boolean,
    openDayPicker: boolean,
    openTravellersMenu: boolean,


    // component data
    intendedDestination: string,
    intendedStayDuration: string,
    intendedChildTravellers: number,
    intendedAdultTravellers: number,
    intendedNumberOfRooms: number
}



export const reservationInitialState: ReservationState = {
    // component controls
    openLocationSuggestions: false,
    openDayPicker: false,
    openTravellersMenu: false,

    // component data
    intendedDestination: "",
    intendedStayDuration: "",
    intendedChildTravellers: 0,
    intendedAdultTravellers: 1,
    intendedNumberOfRooms: 1
}