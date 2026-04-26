import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            // immerjs
            state = action.payload;
        },
        logout(state) {
            return initialState
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;