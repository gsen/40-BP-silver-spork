import { useState, memo } from "react";
const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
      <h1>(WithoutCallback)Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </>
  );
}
