import type { Rootstate } from "../../store"







export const selectAllHotels = (state: Rootstate) => state.hotels.hotels 

export const selectHotelsLoadingState = (state: Rootstate) => state.hotels.loading

export const selectChosenHotel = (state: Rootstate) => state.hotels.selectedHotel