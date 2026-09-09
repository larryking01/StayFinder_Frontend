import type { Rootstate } from "../../store";
import { createSelector } from "@reduxjs/toolkit";







export const selectOpenLocationSuggestions = (state: Rootstate) => state.reservation.openLocationSuggestions

export const selectOpenDayPicker = (state: Rootstate) => state.reservation.openDayPicker 

export const selectOpenTravellersMenu = (state: Rootstate) => state.reservation.openTravellersMenu

export const selectSearchDestination = (state: Rootstate) => state.reservation.searchDestination

export const selectIntendedTripDates = (state: Rootstate) => state.reservation.intendedTripDates

export const selectIntendedChildTravellers = (state: Rootstate) => state.reservation.intendedChildTravellers

export const selectIntendedAdultTravellers = (state: Rootstate) => state.reservation.intendedAdultTravellers

export const selectIntendedNumberOfRooms = (state: Rootstate) => state.reservation.intendedNumberOfRooms

// use memoized selector to return aggregate reservation details to avoid unnecessary re-rendering inside component.
export const selectIntendedReservationDetails = createSelector(
    [
     selectSearchDestination, 
     selectIntendedTripDates, 
     selectIntendedChildTravellers, 
     selectIntendedAdultTravellers, 
     selectIntendedNumberOfRooms
    ],
    ((searchDestination, intendedTripDates, intendedChildTravellers, intendedAdultTravellers, intendedNumberOfRooms) => {
        let reservationDetails = {
            searchDestination,
            intendedTripDates,
            intendedChildTravellers,
            intendedAdultTravellers,
            intendedNumberOfRooms
        }

        return reservationDetails
    })
)