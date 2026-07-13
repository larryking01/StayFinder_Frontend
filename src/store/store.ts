import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from './features/hotelSlice/hotel.slice'







export const store = configureStore({
    
    reducer: {
        hotels: hotelsReducer
    }
})