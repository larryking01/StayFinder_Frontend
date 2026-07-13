import { createSlice } from "@reduxjs/toolkit";









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
    }
})





// make actions accessible to other files and slice reducer accessible to the store
export const { addNewHotel } = hotelSlice.actions

export default hotelSlice.reducer