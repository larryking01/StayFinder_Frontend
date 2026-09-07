import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from './features/hotelSlice/hotel.slice'
import reviewsReducer from './features/reviewSlice/review.slice'
import reservationReducer from './features/reservationSlice/reservation.slice'
import roomsReducer from './features/roomsSlice/rooms.slice'
import bookingReducer from './features/bookingSlice/booking.slice'





export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        reviews: reviewsReducer,
        reservation: reservationReducer,
        rooms: roomsReducer,
        bookings: bookingReducer
    }
})




// infer the `RootState` and `AppDispatch` types from the store itself
export type Rootstate = ReturnType<typeof store.getState> 

// create a customized dispatch type with thunks and extra features support
export type AppDispatch = typeof store.dispatch