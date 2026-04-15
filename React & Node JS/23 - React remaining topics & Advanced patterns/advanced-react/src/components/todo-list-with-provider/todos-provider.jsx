import { createContext, useReducer } from "react";
import todosReducer from "./todos-reducer";
export const TodosContext = createContext();
// this pattern can be used for global state management
function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return <TodosContext value={{ todos, dispatch }}>{children}</TodosContext>;
}
export default TodosProvider;
