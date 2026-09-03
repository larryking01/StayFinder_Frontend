import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios } from "../../../api/axios.public.instance";
import { isAxiosError } from "axios";









export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async(_, { rejectWithValue }) => {

    let endpoint = '/rooms/fetch-all-rooms'

    try {
        let response = await publicAxios.get(endpoint)
        return response.data.data
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.log("FETCH/ROOMS AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }

})



export const fetchRoomsByHotelId = createAsyncThunk('rooms/fetchHotelRooms', async(hotelId: string, { rejectWithValue }) => {

    let endpoint = `/rooms/fetch-hotel-rooms/${ hotelId }`

    try {
        let response = await publicAxios.get(endpoint)
        return response.data.data
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.log("FETCH/HOTEL ROOMS AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }

})



export const fetchRoomById = createAsyncThunk('rooms/fetchRoomById', async(roomId: string, { rejectWithValue }) => {

    let endpoint = `/rooms/fetch-room/${ roomId }`

    try {
        let response = await publicAxios.get(endpoint)
        return response.data.data[0]
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.log("FETCH/SELECTED ROOM AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }

})
