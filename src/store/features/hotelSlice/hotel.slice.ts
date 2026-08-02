import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


import type { Hotel } from "../../../types/hotel.model";
import { fetchHotels, fetchSelectedHotelById } from "./hotel.thunks";
import { hotelInitialState } from "./hotel.initialState";










const hotelSlice = createSlice({
    name: 'hotels',
    initialState: hotelInitialState,
    reducers: {
        updateSelectedHotel(state, action: PayloadAction<Hotel>) {
            let selectedHotel = action.payload 
            state.selectedHotel = selectedHotel
        }
    },
    extraReducers: ( builder ) => {
        builder 
            .addCase( fetchHotels.pending, (state) => {
                state.loadingHotels = true
            })
            .addCase( fetchHotels.fulfilled, (state, action) => {
                const loadedHotels = action.payload
                state.hotels = loadedHotels
                state.loadingHotels = false
                state.error = null
            })
            .addCase( fetchHotels.rejected, (state, action) => {
                state.error = action.payload as string
                state.hotels = []
                state.loadingHotels = false
            })
            .addCase( fetchSelectedHotelById.pending, (state) => {
                state.loadingHotels = true
            })
            .addCase( fetchSelectedHotelById.fulfilled, (state, action) => {
                let selectedHotel = action.payload
                state.loadingHotels = false
                state.error = null 
                state.selectedHotel = selectedHotel
            })
            .addCase( fetchSelectedHotelById.rejected, (state, action) => {
                state.loadingHotels = false
                state.error = action.payload as string
                state.selectedHotel = null
            })
    }
})





// make actions accessible to other files and slice reducer accessible to the store
export const { updateSelectedHotel } = hotelSlice.actions

export default hotelSlice.reducer