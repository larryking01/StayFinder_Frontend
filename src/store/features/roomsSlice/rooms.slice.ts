import { createSlice } from "@reduxjs/toolkit";
import { roomsInitialState } from "./rooms.initialState";
import { fetchRooms, fetchRoomsByHotelId } from "./rooms.thunk";








export const roomsSlice = createSlice({
    name: 'Rooms',
    initialState: roomsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.loadingRooms = true
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                let loadedRooms = action.payload 
                state.rooms = loadedRooms 
                state.loadingRooms = false 
                state.roomsError = null
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.loadingRooms = false 
                state.rooms = []
                state.roomsError = action.payload as string
            })
            .addCase(fetchRoomsByHotelId.pending, (state) => {
                state.loadingRooms = true
            })
            .addCase(fetchRoomsByHotelId.fulfilled, (state, action) => {
                let loadedRooms = action.payload 
                state.loadingRooms = false 
                state.rooms = loadedRooms 
                state.roomsError = null
            })
            .addCase(fetchRoomsByHotelId.rejected, (state, action) => {
                state.loadingRooms = false 
                state.rooms = []
                state.roomsError = action.payload as string
            })
    }
})




// make the rooms reducer accessible to the store.
export default roomsSlice.reducer