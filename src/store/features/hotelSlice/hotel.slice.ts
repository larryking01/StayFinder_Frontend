import { createSlice } from "@reduxjs/toolkit";
import { fetchHotels } from "./hotel.thunks";










// add initial state type later



const hotelSlice = createSlice({
    name: 'hotels',
    initialState: {
        loading: 'idle',
        hotels: []
    },
    reducers: {
        addNewHotel(state, action) {
            console.log( state, action )
        }
    },
    extraReducers: ( builder ) => {
        builder 
            .addCase( fetchHotels.fulfilled, (state, action) => {
                console.log("thunk succeeded")
            })
    }
})





// make actions accessible to other files and slice reducer accessible to the store
export const { addNewHotel } = hotelSlice.actions

export default hotelSlice.reducer