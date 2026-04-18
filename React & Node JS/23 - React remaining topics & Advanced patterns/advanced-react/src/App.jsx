import { useState, lazy, Suspense } from "react";
import Todos from "./components/todo-list/todos";
import TodosList from "./components/todo-list-with-provider/todos";
import TodosProvider from "./components/todo-list-with-provider/todos-provider";
import Users from "./components/use-memo-example/problem";
import UsersWithMemo from "./components/use-memo-example/solution";
import WithoutCallback from "./components/use-callback-example/problem";
import WithCallback from "./components/use-callback-example/solution";
import Parent from "./components/forward-ref/parent";

const Preview = lazy(() => import("./components/lazy-loading/lazy"));
function App() {
  const users = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
  }));

  const [preview, setPreview] = useState(false);
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
      {/* <WithoutCallback />
      <WithCallback /> */}
      <label htmlFor="showPreview">Show Preview</label>
      <input type="checkbox" id="showPreview" checked={preview} onChange={() => setPreview(!preview)} />
      {preview && (
        <Suspense fallback={<div>Loading...</div>}>
          <Preview />
          <Parent />
        </Suspense>
      )}
    </>
  );
}

export default App;
