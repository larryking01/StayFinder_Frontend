import type { Rootstate } from "../../store"; 






export const selectUserBookings = (state: Rootstate) => state.bookings.bookings 

export const getSelectedBooking = (state: Rootstate) => state.bookings.selectedBooking