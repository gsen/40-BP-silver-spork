import { createStore } from "./create-store.js";
import { counterReducer, decrement, increment, add, reset } from "./counter-reducer.js";
const store = createStore(counterReducer);

console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    // in case of react component will re-render with latest state value.
});


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(add(4))
store.dispatch(decrement(4))
store.dispatch(reset())




