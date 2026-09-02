import type { Rootstate } from "../../store";
import { createSelector } from "@reduxjs/toolkit";



export const selectRooms = (state: Rootstate) => state.rooms.rooms 

export const selectHotelId = (state: Rootstate, hotelId: string) => hotelId

// export const selectRoomsByHotelId = (state: Rootstate, hotelId: string) => {
//     let rooms = state.rooms.rooms 
//     let hotelRooms = rooms.filter( room => room.hotelId)
// }

export const selectRoomsByHotelId = createSelector(
    [selectRooms, selectHotelId],

    (rooms, hotelId) => {
        let hotelRooms = rooms.filter( room => room.hotelId === hotelId )
        return hotelRooms
    }
)