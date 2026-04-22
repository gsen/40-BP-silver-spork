import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset, add } from "./slices/counter-slice";
import "./App.css";

function App() {
  let count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <section id="center">
        <button
          className="counter"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <h1>{count}</h1>
        <button
          className="counter"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>

        <button
          className="counter"
          onClick={() => {
            dispatch(add(5));
          }}
        >
          Add 5
        </button>

        <button
          className="counter"
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </section>
    </>
  );
}

export default App;
