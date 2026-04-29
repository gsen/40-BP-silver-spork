import { useState } from "react";

import "./App.css";
import User from "./components/user";
import UserQueryExample from "./components/user-api-example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <User /> */}
      <UserQueryExample />
    </>
  );
}

export default App;
