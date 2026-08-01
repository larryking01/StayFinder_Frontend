import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios } from "../../../api/axios.public.instance";
import { isAxiosError } from "axios";








export const fetchHotelReviewsById = createAsyncThunk('reviews/fetchHotelReviewsById', async (hotelId: string, { rejectWithValue }) => {
    
    const endpoint = `/reviews/get-hotel-reviews/${ hotelId }`

    try {
        let response = await publicAxios.get( endpoint )
        return response.data.data
    }
    catch( error ) {
        if(isAxiosError(error)) {
            console.log("axios error fetching hotel reviews: ", error)
            // check for specific axios error type and return descriptive messages
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})