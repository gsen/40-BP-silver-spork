import { useState } from "react";

import "./App.css";
import User from "./components/user";
import UserQueryExample from "./components/user-api-example";
import UserSearch from "./components/user-search";
import UserAdd from "./components/user-add";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <User /> */}
      <UserQueryExample />
      <UserSearch />
      <UserAdd />
    </>
  );
}

export default App;
