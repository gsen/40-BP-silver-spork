import { useState } from "react";
import Todos from "./components/todo-list/todos";
import TodosList from "./components/todo-list-with-provider/todos";
import TodosProvider from "./components/todo-list-with-provider/todos-provider";
import Users from "./components/use-memo-example/problem";
import UsersWithMemo from "./components/use-memo-example/solution";
import WithoutCallback from "./components/use-callback-example/problem";
import WithCallback from "./components/use-callback-example/solution";
function App() {
  const users = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
  }));

  return (
    <>
      {/* <Todos />; */}
      {/* <TodosProvider>
        <TodosList />
      </TodosProvider> */}
      {/* <section style={{ display: "flex", gap: "2rem" }}>
        <Users users={users} />
        <UsersWithMemo users={users} />
      </section> */}
      <WithoutCallback />
      <WithCallback />
    </>
  );
}

export default App;
