import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./slices/todo-list-slice";

export default function TodoList() {
  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodo({ id: crypto.randomUUID(), text: value }));
          setValue("");
        }}
      >
        Add Todo
      </button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : (
        <h1>No Todos</h1>
      )}
    </>
  );
}
