import { createSlice } from "@reduxjs/toolkit"; 
import { userInitialState } from "./user.initialState";







const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            
    }
})






// make actions and user reducer accessible to the store and components
export default userSlice.reducer