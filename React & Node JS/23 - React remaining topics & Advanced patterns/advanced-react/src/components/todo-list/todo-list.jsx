function TodoList({ todos, onTodoChange }) {
  function handleChange(event, todoId) {
    onTodoChange(todoId, event.target.checked);
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
