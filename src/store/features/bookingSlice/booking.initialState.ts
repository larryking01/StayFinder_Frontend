import type { Booking } from "../../../types/booking.model";





interface BookingState  {
    loading: boolean,
    bookings: Booking[],    // bookings made by current 
    selectedBooking: Booking | null,
    error: string | null
}


export const initialBookingState: BookingState = {
    loading: false,
    bookings: [],
    selectedBooking: null,
    error: null
}