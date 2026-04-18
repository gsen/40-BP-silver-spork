import React from "react";
import Child from "./child";

export default function Parent() {
  const childRef = React.useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        childRef.current.focus();
      }}
    >
      <Child ref={childRef} />
      <button>Focus</button>
    </form>
  );
}
