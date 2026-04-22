export function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listeners => listeners()); // notify the listenser that state has been modified.
    }

    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            listeners = listeners.filter(l => l !== listener);
        }
    }

    dispatch({ type: "@@INIT" }); // dispatch a dummy action to popoluate initialState from reducer.

    return { getState, dispatch, subscribe };
}