const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const ADD = "counter/ADD";
const RESET = "counter/reset";

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const add = (value) => ({ type: ADD, payload: value });
const reset = () => ({ type: RESET });

export { increment, decrement, add, reset, INCREMENT, DECREMENT, ADD, RESET }