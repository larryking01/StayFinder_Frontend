import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios } from "../../../api/axios.public.instance";
import { isAxiosError } from 'axios'









export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async (_, { rejectWithValue } ) => {
    
    const endpoint = '/hotels/get-all-hotels'

    try {
        let response = await publicAxios.get(endpoint)
        return response.data.data
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
    
})



export const fetchSelectedHotelById = createAsyncThunk('hotels/fetchSelectedHotelById', async (hotelId: string, { rejectWithValue }) => {
    const endpoint = `/hotels/find-hotel/${ hotelId }`

    try {
        let response = await publicAxios.get( endpoint)
        return response.data.data[0]
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("axios error: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})