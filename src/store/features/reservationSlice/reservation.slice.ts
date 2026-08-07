import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { reservationInitialState } from "./reservation.initialState";









const reservationSlice = createSlice({
    name: 'reservation',
    initialState: reservationInitialState,
    reducers: {
        toggleOpenLocationSuggestions(state) {
            state.openDayPicker = false
            state.openTravellersMenu = false
            state.openLocationSuggestions = !state.openLocationSuggestions
        },
        toggleOpenDayPicker(state) {
            state.openLocationSuggestions = false 
            state.openTravellersMenu = false 
            state.openDayPicker = !state.openDayPicker
        },
        toggleOpenTravellersMenu(state) {
            state.openDayPicker = false 
            state.openLocationSuggestions = false 
            state.openTravellersMenu = !state.openTravellersMenu
        },
        closeReservationControls(state) {
            state.openDayPicker = false 
            state.openLocationSuggestions = false 
            state.openTravellersMenu = false
        },
        setIntendedDestination(state, action: PayloadAction<string>) {
            let selectedDestination = action.payload
            state.intendedDestination = selectedDestination
        },
        setIntendedStayDuration(state, action: PayloadAction<string>) {
            let selectedStayDuration = action.payload 
            state.intendedStayDuration = selectedStayDuration
        },
        incrementIntendedNumberOfChildTravellers(state) {
            state.intendedChildTravellers++ 
        },
        decrementIntendedNumberOfChildTravellers(state) {
            let childTravellers = state.intendedChildTravellers 
            if(childTravellers === 0) {
                return
            }

            state.intendedChildTravellers--
        },
        incrementIntendedNumberOfAdultTravellers(state) {
            state.intendedAdultTravellers++
        },
        decrementIntendedNumberOfAdultTravellers(state) {
            let adultTravellers = state.intendedAdultTravellers 
            if(adultTravellers === 1) {
                return
            }

            state.intendedAdultTravellers--
        },
        incrementIntendedNumberOfRooms(state) {
            state.intendedNumberOfRooms++
        },
        decrementIntendedNumberOfRooms(state) {
            let numberOfRooms = state.intendedNumberOfRooms 
            if(numberOfRooms === 1) {
                return
            }

            state.intendedNumberOfRooms--
        },

    }
})








export const { 
                toggleOpenLocationSuggestions, 
                toggleOpenDayPicker, 
                toggleOpenTravellersMenu, 
                closeReservationControls,
                setIntendedDestination,
                setIntendedStayDuration,
                incrementIntendedNumberOfChildTravellers,
                decrementIntendedNumberOfChildTravellers,
                incrementIntendedNumberOfAdultTravellers,
                decrementIntendedNumberOfAdultTravellers,
                incrementIntendedNumberOfRooms,
                decrementIntendedNumberOfRooms
                
             } = reservationSlice.actions

export default reservationSlice.reducer