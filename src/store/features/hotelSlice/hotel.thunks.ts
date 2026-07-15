import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios } from "../../../api/axios.public.instance";
import { isAxiosError } from 'axios'









export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async (_, { rejectWithValue } ) => {
    
    const endpoint = '/hotels/get-all-hotels'

    try {
        let response = await publicAxios.get(endpoint)

        if( response.data?.status !== 200 ) {
            return rejectWithValue("We encountered an error while retrieving hotels. Please try again later.")
        }

        return response.data.data

    }
    catch( error ) {
        if(isAxiosError(error)) {
            // check error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
    
})