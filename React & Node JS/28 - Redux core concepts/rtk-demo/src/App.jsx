import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let count = 0;
  return (
    <>
      <section id="center">
        <button
          className="counter"
          onClick={() => {
            // dispatch(increment());
          }}
        >
          +
        </button>
        <h1>{count}</h1>
        <button
          className="counter"
          onClick={() => {
            // dispatch(decrement());
          }}
        >
          -
        </button>

        <button
          className="counter"
          onClick={() => {
            // dispatch(add(5));
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
