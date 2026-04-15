import { use } from "react";
import { TodosContext } from "./todos-provider";

function TodoList({ todos }) {
  const { dispatch } = use(TodosContext);
  function handleChange(event, todoId) {
    dispatch({ type: "update", payload: { todoId, completed: event.target.checked } });
  }

  return (
    <ul id="todo-list">
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            name={`${todo.title}`}
            id={todo.id}
            onChange={(event) => handleChange(event, todo.id)}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
