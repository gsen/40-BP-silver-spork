import React from "react";
import Child from "./child";
import ChildWithImperativeHandle from "./child-with-imperative-handle";
export default function Parent() {
  const childRef = React.useRef(null);
  const childHandleRef = React.useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        childRef.current.focus();
        childRef.current.value = "Hello from parent!";
        childHandleRef.current.focus();
        childHandleRef.current.logCurrentValue();
        // ❌ will not work because childHandleRef does not have a value property
        childHandleRef.current.value = "Hello from parent!";
      }}
    >
      <Child ref={childRef} />
      <ChildWithImperativeHandle ref={childHandleRef} />
      <button>Focus</button>
    </form>
  );
}
