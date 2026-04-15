import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import "./todos.css";

import { useContext } from "react";
import { TodosContext } from "./todos-provider";

export default function Todos() {
  const { todos, dispatch } = useContext(TodosContext);

  function reset() {
    dispatch({ type: "reset" });
  }
  return (
    <>
      <AddTodo />
      <button onClick={reset}>Reset</button>
      <h1> Todos</h1>
      {todos.filter((todo) => !todo.completed).length ? (
        <TodoList todos={todos.filter((todo) => !todo.completed)} />
      ) : (
        "All Tasks done"
      )}
      <h1>Completed Todos</h1>
      <TodoList todos={todos.filter((todo) => todo.completed)} />
    </>
  );
}
