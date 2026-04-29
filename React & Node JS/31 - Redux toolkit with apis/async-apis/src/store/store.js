import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import { userApi } from "../api/service/users";
const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})

export default store;