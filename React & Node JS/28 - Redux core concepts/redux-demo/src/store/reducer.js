const initialState = { count: 0, history: [] };
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const ADD = "counter/ADD";
const RESET = "counter/reset";

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

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const add = (value) => ({ type: ADD, payload: value });
const reset = () => ({ type: RESET });

export { increment, decrement, add, reset }