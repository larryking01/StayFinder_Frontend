import { createSlice } from "@reduxjs/toolkit"; 
import { reviewInitialState } from "./review.initialState";
import { fetchHotelReviewsById } from "./review.thunk";







export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: reviewInitialState, 
    reducers: {

    },
    extraReducers: ( builder ) => {
        builder
            .addCase(fetchHotelReviewsById.pending, (state) => {
                state.loadingReviews = true
            })
            .addCase( fetchHotelReviewsById.fulfilled, ( state, action) => {
                let loadedReviews = action.payload
                state.loadingReviews = false 
                state.error = null
                state.hotelReviews = loadedReviews
            })
            .addCase( fetchHotelReviewsById.rejected, ( state, action ) => {
                state.loadingReviews = false 
                state.hotelReviews = []
                state.error = action.payload as string
            })
    }
})



// make actions accessible to other files and slice reducer accessible to the store
export default reviewSlice.reducer