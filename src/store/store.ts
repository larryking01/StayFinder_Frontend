import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from './features/hotelSlice/hotel.slice'
import reviewsReducer from './features/reviewSlice/review.slice'








export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        reviews: reviewsReducer
    }
})




// infer the `RootState` and `AppDispatch` types from the store itself
export type Rootstate = ReturnType<typeof store.getState> 

// create a customized dispatch type with thunks and extra features support
export type AppDispatch = typeof store.dispatch