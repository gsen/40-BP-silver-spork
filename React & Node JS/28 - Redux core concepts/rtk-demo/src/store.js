import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import todosReducer from "./slices/todo-list-slice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todoList: todosReducer
    }
})