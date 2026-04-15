import { useContext } from "react";
import { useState } from "react";
import { TodosContext } from "./todos-provider";
function AddTodo() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodosContext);
  function handleClick() {
    // dipatch allows us to dispatch an action which will call our reducer function.
    dispatch({ type: "add", payload: { title } });
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
