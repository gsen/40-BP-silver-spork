import { useState } from "react";

export default function Users({ users }) {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  function filterAndSortUsers() {
    console.log("Filtering and sorting users...");
    return users
      .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  const filteredUsers = filterAndSortUsers();
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <h1>Without useMemo</h1>
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
