import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomUser, getUserById } from "../api/api";



export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        const response = await getRandomUser()
        return response;
    },
)

export const fetchUserById = createAsyncThunk('users/fetchUserById',
    async (userId) => {

        return getUserById(userId);
    }
)

export const fetchUserByIdReject = createAsyncThunk('users/fetchUserByIdReject',
    async (userId) => {

        // return getUserById(userId);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("timeout")
            }, 3000);
        })
    }
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
        reset() {
            return initialState;
        }
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
        }).addCase(fetchUserById.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        }).addCase(fetchUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
        }).addCase(fetchUserByIdReject.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.data = null;
        }).addCase(fetchUserByIdReject.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
        })
    }
})

export const { reset } = userSlice.actions;

export default userSlice.reducer;

