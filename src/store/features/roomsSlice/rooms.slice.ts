import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { roomsInitialState } from "./rooms.initialState";
import { fetchRooms, fetchRoomsByHotelId, fetchRoomById } from "./rooms.thunk";
import type { Room } from "../../../types/room.model";








export const roomsSlice = createSlice({
    name: 'Rooms',
    initialState: roomsInitialState,
    reducers: {
        setSelectedRoom(state, action: PayloadAction<Room>) {
            let room = action.payload
            state.selectedRoom = room
        }
    },
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
            .addCase(fetchRoomById.pending, (state, action) => {
                state.loadingRooms = true
            })
            .addCase(fetchRoomById.fulfilled, (state, action) => {
                let loadedRoom = action.payload
                state.loadingRooms = false
                state.selectedRoom = loadedRoom
                state.roomsError = action.payload
            })
            .addCase(fetchRoomById.rejected, (state, action) => {
                state.loadingRooms = false
                state.selectedRoom = null 
                state.roomsError = action.payload as string
            })
    }
})






// make actions accessible to other components
export const { setSelectedRoom } = roomsSlice.actions

// make the rooms reducer accessible to the store.
export default roomsSlice.reducer