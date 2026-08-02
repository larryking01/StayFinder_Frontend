import type { Rootstate } from "../../store"







export const selectAllHotels = (state: Rootstate) => state.hotels.hotels 

export const selectHotelsLoadingState = (state: Rootstate) => state.hotels.loadingHotels

export const selectChosenHotel = (state: Rootstate) => state.hotels.selectedHotel

export const selectHotelsError = (state: Rootstate) => state.hotels.error

export const selectAppName = (state: Rootstate) => state.hotels.appName