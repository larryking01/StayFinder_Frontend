import type { DateRange } from "@daypicker/react"



interface ReservationState {
    // component controls. 
    openLocationSuggestions: boolean,
    openDayPicker: boolean,
    openTravellersMenu: boolean,


    // component data
    intendedDestination: string,
    intendedStayDuration: DateRange | undefined,
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
    intendedStayDuration: undefined,
    intendedChildTravellers: 0,
    intendedAdultTravellers: 1,
    intendedNumberOfRooms: 1
}