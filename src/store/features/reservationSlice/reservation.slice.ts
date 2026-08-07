import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
})








export const { toggleOpenLocationSuggestions, toggleOpenDayPicker, toggleOpenTravellersMenu, closeReservationControls } = reservationSlice.actions

export default reservationSlice.reducer