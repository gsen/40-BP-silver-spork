import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            // immerjs
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        add(state, action) {
            state.count += action.payload;
        },
        reset(state) {
            return initialState;
        }
    }
})

export const { increment, decrement, add, reset } = counterSlice.actions;
export default counterSlice.reducer;