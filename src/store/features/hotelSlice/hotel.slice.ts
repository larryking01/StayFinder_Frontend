import { createSlice } from "@reduxjs/toolkit";
import { fetchHotels } from "./hotel.thunks";
import { hotelInitialState } from "./initialHotelState";










const hotelSlice = createSlice({
    name: 'hotels',
    initialState: hotelInitialState,
    reducers: {
        addNewHotel(state, action) {
            console.log( state, action )
        }
    },
    extraReducers: ( builder ) => {
        builder 
            .addCase( fetchHotels.pending, (state) => {
                state.loading = true
            })
            .addCase( fetchHotels.fulfilled, (state, action) => {
                const loadedHotels = action.payload
                state.hotels = loadedHotels
                state.loading = false
                state.error = null
            })
            .addCase( fetchHotels.rejected, (state) => {
                // state.error = action.payload
                state.hotels = []
                state.loading = false
            })
    }
})





// make actions accessible to other files and slice reducer accessible to the store
export const { addNewHotel } = hotelSlice.actions

export default hotelSlice.reducer