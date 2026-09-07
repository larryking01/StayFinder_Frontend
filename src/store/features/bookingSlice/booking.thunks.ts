import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Booking } from "../../../types/booking.model";
import { publicAxios } from "../../../api/axios.public.instance";
import { isAxiosError } from "axios";






export const addNewBooking = createAsyncThunk('bookings/addNewBooking', async (bookingPayload: Booking, { rejectWithValue }) => {
    const endpoint = `/bookings/add-new-booking`

    try {
        let response = await publicAxios.post(endpoint, bookingPayload)
        return response.data.data[0]
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("ADD/NEW/BOOKING axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})



export const fetchUserBookings = createAsyncThunk('bookings/fetchUserBookings', async (userId: string, { rejectWithValue }) => {
    const endpoint = `/bookings/fetch-user-bookings/:${ userId }`

    try {
        let response = await publicAxios.get(endpoint)
        return response.data.data
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("FETCH/USER/BOOKINGS axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})



export const fetchBookingById = createAsyncThunk('bookings/fetchBookingById', async (bookingId: string, { rejectWithValue }) => {
    const endpoint = `/bookings/fetch-booking/:${ bookingId }`

    try {
        let response = await publicAxios.get(endpoint)
        return response.data.data[0]
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("FETCH/BOOKING/BYID axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})



export const cancelBooking = createAsyncThunk('bookings/cancelBooking', async (bookingId: string, { rejectWithValue }) => {
    const endpoint = `/bookings/cancel-booking/:${ bookingId }`

    try {
        let response = await publicAxios.patch(endpoint)
        return response.data.data[0]
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("CANCEL/BOOKING axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})





export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (bookingId: string, { rejectWithValue }) => {
    const endpoint = `/bookings/delete-booking/:${ bookingId }`

    try {
        let response = await publicAxios.delete(endpoint)
        return response.data.data[0]
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("DELETE/BOOKING axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})



export const deleteAllBookings = createAsyncThunk('bookings/deleteAllBookings', async (userId: string, { rejectWithValue }) => {
    const endpoint = `/bookings/cancel-all-bookings/:${ userId }`

    try {
        let response = await publicAxios.delete(endpoint)
        return response.data.data
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("DELETE/ALL/BOOKINGS axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})