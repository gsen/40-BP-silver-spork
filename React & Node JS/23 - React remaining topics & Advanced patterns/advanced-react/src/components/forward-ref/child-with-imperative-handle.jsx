import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef(function Child(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    logCurrentValue: () => {
      console.log(inputRef.current.value);
    },
  }));

  return (
    <div>
      <input placeholder="with imperative handle" type="text" ref={inputRef} />
    </div>
  );
});

export default Child;
