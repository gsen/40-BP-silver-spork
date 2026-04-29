import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomUser } from "../api/api";



export const fetchUser = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await getRandomUser()
        return response;
    },
)

const initialState = {
    data: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
        })
    }
})


export default userSlice.reducer;

