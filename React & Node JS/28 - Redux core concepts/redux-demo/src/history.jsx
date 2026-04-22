import React from "react";
import { useSelector } from "react-redux";

export default function History() {
  const history = useSelector((state) => state.history);
  return (
    <>
      <h1>History</h1>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
