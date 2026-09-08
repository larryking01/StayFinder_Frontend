import type { Rootstate } from "../../store"
import { createSelector } from "@reduxjs/toolkit"






export const selectAllHotels = (state: Rootstate) => state.hotels.hotels

export const selectHotelsLoadingState = (state: Rootstate) => state.hotels.loadingHotels

export const selectChosenHotel = (state: Rootstate) => state.hotels.selectedHotel

export const selectHotelsError = (state: Rootstate) => state.hotels.error

export const selectAppName = (state: Rootstate) => state.hotels.appName 

export const selectSearchQuery = (state: Rootstate, query: string) => query

// export const selectHotelsBySearchQuery = (state: Rootstate, query: string) => {
//     const normalizedQuery = query.trim().toLowerCase()
//     const hotels = state.hotels.hotels 
//     const matchingHotels = hotels.filter( hotel => (
//         hotel.hotelName.toLowerCase().includes(normalizedQuery) ||
//         hotel.city.toLowerCase().includes(normalizedQuery) ||
//         hotel.country.toLowerCase().includes(normalizedQuery) ||
//         hotel.streetAddress.toLowerCase().includes(normalizedQuery)
//     ))

//     return matchingHotels
// }


export const selectHotelsBySearchQuery = createSelector(
    [selectAllHotels, selectSearchQuery],
    (hotels, query) => {
        const normalizedQuery = query.trim().toLowerCase()
        const matchingHotels = hotels.filter( hotel => (
            hotel.hotelName.toLowerCase().includes(normalizedQuery) ||
            hotel.city.toLowerCase().includes(normalizedQuery) ||
            hotel.country.toLowerCase().includes(normalizedQuery) ||
            hotel.streetAddress.toLowerCase().includes(normalizedQuery)
        ))

        return matchingHotels
    }
)