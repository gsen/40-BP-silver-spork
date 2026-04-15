import { useMemo } from "react";
import { useState } from "react";

export default function UsersWithMemo({ users }) {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const filteredUsers = useMemo(() => {
    console.log("Filtering and sorting users...");
    return users
      .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [users, search]);

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <h1>With useMemo</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
}
