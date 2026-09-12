import { createSlice } from "@reduxjs/toolkit"; 
import { userInitialState } from "./user.initialState";
import { initializeAuth, getCurrentUser, registerUser, loginUser, logoutUser } from "./user.thunks";
import { normalizeUser } from "../../../utils/normalizeUser";








const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setAuthenticatedUser: (state, action) => {
            state.user = normalizeUser(action.payload)
        },
        clearAuthenticatedUser: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(initializeAuth.pending, (state) => {
                state.loading = true
            })
            .addCase(initializeAuth.fulfilled, (state, action) => {
                state.loading = false 
                state.error = null 
                state.authInitialized = true

                if(action.payload) {
                    state.user = normalizeUser(action.payload)
                }
                else {
                    state.user = null
                }
            })
            .addCase(initializeAuth.rejected, (state, action) => {
                state.loading = false 
                state.user = null 
                state.authInitialized = true
                state.error = action.payload as string
            })

            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                const supabaseUser = action.payload 
                const normalizedUser = normalizeUser(supabaseUser)
                state.user = normalizedUser
                state.loading = false
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.loading = false 
                state.user = null
                state.error = action.payload as string
            })

            .addCase(registerUser.pending, (state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false 
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false 
                state.error = action.payload as string
            })

            .addCase(loginUser.pending, (state) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.loading = false 
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false 
                state.error = action.payload as string
            })

            .addCase(logoutUser.pending, (state) => {
                state.loading = false
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false 
                state.user = null
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false 
                state.error = action.payload as string
            })
    }
})






// make actions and user reducer accessible to the store and components
export const { setAuthenticatedUser, clearAuthenticatedUser } = userSlice.actions

export default userSlice.reducer