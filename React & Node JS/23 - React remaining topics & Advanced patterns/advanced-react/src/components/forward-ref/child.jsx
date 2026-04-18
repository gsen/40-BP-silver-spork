import { forwardRef } from "react";

const Child = forwardRef(function Child(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default Child;
