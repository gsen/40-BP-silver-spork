const initialState = { count: 0, history: [] };

import { INCREMENT, DECREMENT, ADD, RESET } from "./actions";
export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                history: [...state.history, 'INCREMENT']
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                history: [...state.history, 'DECREMENT']
            };

        case ADD:
            return {
                ...state,
                count: state.count + action.payload,
                history: [...state.history, 'ADD']
            };

        case RESET:
            return initialState;

        default:
            return state;
    }
}
