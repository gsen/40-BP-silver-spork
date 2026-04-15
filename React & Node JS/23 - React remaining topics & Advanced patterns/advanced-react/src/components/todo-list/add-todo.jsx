import { useState } from "react";
function AddTodo({ onTodoAdd }) {
  const [title, setTitle] = useState("");
  function handleClick() {
    onTodoAdd(title);
    setTitle("");
  }
  return (
    <>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default AddTodo;
