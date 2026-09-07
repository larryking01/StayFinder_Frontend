import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialBookingState } from "./booking.initialState";
import { fetchUserBookings, cancelBooking, deleteBooking, fetchBookingById } from "./booking.thunks";
import type { Booking } from "../../../types/booking.model";








export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: initialBookingState,
    reducers: {
        cancelBookingSync(state, action: PayloadAction<string>) {
            const bookingId = action.payload 
            let matchedBooking = state.bookings.find( booking => booking.id === bookingId)

            if(!matchedBooking) {
                return
            }

            matchedBooking.status = 'cancelled'
        },
        deleteBookingSync(state, action: PayloadAction<string>) {
            const bookingId = action.payload 
            let filteredBookings = state.bookings.filter( booking => booking.id !== bookingId )
            state.bookings = filteredBookings
        },
        setSelectedBookingSync(state, action: PayloadAction<Booking>) {
            const booking = action.payload 
            state.selectedBooking = booking
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserBookings.pending, (state) => {
                state.loading = true 
            })
            .addCase(fetchUserBookings.fulfilled, (state, action) => {
                let userBookings = action.payload
                state.loading = false 
                state.bookings = userBookings 
                state.error = null
            })
            .addCase(fetchUserBookings.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string 
                state.bookings = []
            })
            .addCase(cancelBooking.rejected, (state, action) => {
                // revert cancelled action later
                state.error = action.payload as string
            })
            .addCase(deleteBooking.rejected, (state, action) => {
                // revert local delete operation
                state.error = action.payload as string
            })
            .addCase(fetchBookingById.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchBookingById.fulfilled, (state, action) => {
                const loadedBooking = action.payload 
                state.loading = false 
                state.error = null 
                state.selectedBooking = loadedBooking
            })
            .addCase(fetchBookingById.rejected, (state, action) => {
                state.loading = false 
                state.error = action.payload as string 
                state.selectedBooking = null
            })
           
    }
})




// make actions accessible to other components 
export const { cancelBookingSync, deleteBookingSync } = bookingsSlice.actions 

export default bookingsSlice.reducer