import { createSlice } from "@reduxjs/toolkit"; 
import { userInitialState } from "./user.initialState";
import { registerUser, loginUser, getCurrentUser, logoutUser } from "./user.thunks";









const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(registerUser.pending, (state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false 
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
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false 
                state.error = action.payload as string
            })
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                const currentUser = action.payload 
                state.user = currentUser
                state.loading = false
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.loading = false 
                state.user = null
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
export default userSlice.reducer