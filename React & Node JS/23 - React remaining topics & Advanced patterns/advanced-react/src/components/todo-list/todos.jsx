import { useState } from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import "./todos.css";
import { useReducer } from "react";
import todosReducer from "./todos-reducer";

export default function Todos() {
  // const [todos, setTodos] = useState([]);

  const [todos, dispatch] = useReducer(todosReducer, []);

  function todoAdded(newTodo) {
    // dipatch allows us to dispatch an action which will call our reducer function.
    dispatch({ type: "add", payload: { title: newTodo } });
  }
  function todoUpdated(todoId, completed) {
    dispatch({ type: "update", payload: { todoId, completed } });
  }
  function reset() {
    dispatch({ type: "reset" });
  }
  return (
    <>
      <AddTodo onTodoAdd={todoAdded} />
      <button onClick={reset}>Reset</button>
      <h1> Todos</h1>
      {todos.filter((todo) => !todo.completed).length ? (
        <TodoList todos={todos.filter((todo) => !todo.completed)} onTodoChange={todoUpdated} />
      ) : (
        "All Tasks done"
      )}
      <h1>Completed Todos</h1>
      <TodoList todos={todos.filter((todo) => todo.completed)} onTodoChange={todoUpdated} />
    </>
  );
}
