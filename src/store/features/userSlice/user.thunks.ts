import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabaseClient } from "../../../services/supabase/supabaseClient";
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
    
      try {
            const { data, error } = await supabaseClient.auth.signUp({
                email: user.email,
                password: user.password,
                options: {
                    data: {
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                }
            })

            if (error) {
                console.error("REGISTER USER SUPABASE ERROR: ", error)
                return rejectWithValue(error.message)
            }

            return data.user
        }
        catch (error) {
            console.error("REGISTER USER ERROR: ", error)

            return rejectWithValue(
                "An unexpected error occurred"
            )
        }
})


export const loginUser = createAsyncThunk('users/loginUser', async (user: LoginUserPayload, { rejectWithValue }) => {
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword(user)

        if(error) {
            console.error("LOGIN USER SUPABASE ERROR: ", error);
            return rejectWithValue(error.message);
        }

        return data.user
    }
    catch(error) {
        console.error("LOGIN USER ERROR: ", error);
        return rejectWithValue("An unexpected error occurred");
    } 
})


export const logoutUser = createAsyncThunk('users/logoutUser', async (_, { rejectWithValue }) => {
    
    try {
        const { error } = await supabaseClient.auth.signOut()
        if(error) {
            console.error("LOGOUT USER SUPABASE ERROR: ", error);
            return rejectWithValue(error.message);
        }
    }
    catch(error) {
        console.error("LOGOUT USER ERROR: ", error);
        return rejectWithValue("An unexpected error occurred");
    } 
})


export const forgotPassword = createAsyncThunk('users/forgotPassword', async (email: string, { rejectWithValue }) => {

    try {
        const { data, error } = await supabaseClient.auth.resetPasswordForEmail( email, {
            redirectTo: 'redirect link here'
        })

        if(error) {
            console.error("FORGOT PASSWORD SUPABASE ERROR: ", error);
            return rejectWithValue(error.message);
        }

        return data
    }
    catch(error) {
        console.error("FORGOT PASSWORD ERROR: ", error);
        return rejectWithValue("An unexpected error occurred");
    } 
})


export const resetPassword = createAsyncThunk('users/resetPassword', async (newPassword: string, { rejectWithValue }) => {
    
    try {
        const { data, error } = await supabaseClient.auth.updateUser({ password: newPassword })

        if(error) {
            console.error("RESET PASSWORD SUPABASE ERROR: ", error);
            return rejectWithValue(error.message);
        }

        return data.user
    }
    catch(error) {
        console.error("RESET PASSWORD ERROR: ", error);
        return rejectWithValue("An unexpected error occurred");
    } 
})


export const updateUserProfile = createAsyncThunk('users/updateUserProfile', async (newProfile: UpdateUserProfilePayload, { rejectWithValue }) => {
    
    try {
        const { data, error } = await supabaseClient.auth.updateUser({
            email: newProfile.email,
            data: {
                firstName: newProfile.firstName,
                lastName: newProfile.lastName
            }
        })

        if(error) {
            console.error("UPDATE PROFILE SUPABASE ERROR: ", error);
            return rejectWithValue(error.message);
        }

        return data.user
    }
    catch(error) {
        console.error("UPDATE PROFILE ERROR: ", error);
        return rejectWithValue("An unexpected error occurred");
    } 
})
