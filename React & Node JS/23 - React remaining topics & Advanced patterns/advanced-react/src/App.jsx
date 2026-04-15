import { useState } from "react";
import Todos from "./components/todo-list/todos";
import TodosList from "./components/todo-list-with-provider/todos";
import TodosProvider from "./components/todo-list-with-provider/todos-provider";
function App() {
  return (
    <>
      {/* <Todos />; */}
      <TodosProvider>
        <TodosList />
      </TodosProvider>
    </>
  );
}

export default App;
