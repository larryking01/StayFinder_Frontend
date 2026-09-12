import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { publicAxios } from "../../../api/axios.public.instance";
import type { CreateUserPayload, LoginUserPayload, UpdateUserProfilePayload } from "../../../types/user.model";

import { getSession, getSupabaseCurrentUser } from "../../../services/supabase/supabaseAuthService";









export const initializeAuth = createAsyncThunk('users/initializeAuth', async (_, { rejectWithValue }) => {

    try {
        const session = await getSession() 
        if(!session) {
            return null
        }

        const supabaseUser = await getSupabaseCurrentUser() 
        return supabaseUser
    }
    catch(error) {
        console.error("INITIALIZE AUTH ERROR: ", error)
        return rejectWithValue("We could not restore your authentication session.")
    }
    
})


export const getCurrentUser = createAsyncThunk('users/getCurrentUser', async (_, { rejectWithValue }) => {

    try {
        const supabaseUser = await getSupabaseCurrentUser()
        return supabaseUser
    }
    catch(error) {
        console.error("GET CURRENT USER ERROR: ", error)
        return rejectWithValue("We could not retrieve your account information.")
    }

})


export const registerUser = createAsyncThunk('users/registerUser', async (user: CreateUserPayload, { rejectWithValue }) => {
    
    let endpoint = '/auth/register'

    try {
        let response = await publicAxios.post(endpoint, user)
        return response.data.data.user
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.error("REGISTER USER AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})


export const loginUser = createAsyncThunk('users/loginUser', async (user: LoginUserPayload, { rejectWithValue }) => {
    
    let endpoint = '/auth/login'

    try {
        let response = await publicAxios.post(endpoint, user)
        return response.data.data.user
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.error("LOGIN USER AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})


export const logoutUser = createAsyncThunk('users/logoutUser', async (_, { rejectWithValue }) => {
    
    let endpoint = '/auth/logout'

    try {
        let response = await publicAxios.post(endpoint)
        return response.data
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.error("LOGOUT USER AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})


export const forgotPassword = createAsyncThunk('users/forgotPassword', async (email: string, { rejectWithValue }) => {
    
    let endpoint = '/auth/forgot-password'

    try {
        let response = await publicAxios.post(endpoint, email)
        return response.data
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.error("FORGOT PASSWORD AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})


export const resetPassword = createAsyncThunk('users/resetPassword', async (newPassword: string, { rejectWithValue }) => {
    
    let endpoint = '/auth/reset-password'

    try {
        let response = await publicAxios.post(endpoint, newPassword)
        return response.data
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.error("RESET PASSWORD AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})


export const updateUserProfile = createAsyncThunk('users/updateUserProfile', async (newProfile: UpdateUserProfilePayload, { rejectWithValue }) => {
    
    let endpoint = '/auth/update-profile'

    try {
        let response = await publicAxios.put(endpoint, newProfile)
        return response.data
    }
    catch(error) {
        if(isAxiosError(error)) {
            console.error("UPDATE USER PROFILE AXIOS ERROR: ", error)
            // check for specific axios error type and return descriptive messages latetr
            return rejectWithValue("We could not establish a connection to the server. Please try again in a few minutes.")
        }

        return rejectWithValue("An unexpected error occurred")
    }
})
