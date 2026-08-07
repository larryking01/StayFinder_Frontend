import type { Rootstate } from "../../store";





export const selectOpenLocationSuggestions = (state: Rootstate) => state.reservation.openLocationSuggestions

export const selectOpenDayPicker = (state: Rootstate) => state.reservation.openDayPicker 

export const selectOpenTravellersMenu = (state: Rootstate) => state.reservation.openTravellersMenu