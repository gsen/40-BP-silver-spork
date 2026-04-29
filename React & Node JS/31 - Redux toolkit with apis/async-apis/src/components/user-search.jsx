import React from "react";
import { useLazySearchUserByNameQuery } from "../api/service/users";
export default function UserSearch() {
  const [trigger, { data, error, isLoading }] = useLazySearchUserByNameQuery();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    trigger(name);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Search user by name" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      {data &&
        data.map((user) => (
          <div>
            <p>
              Name: {user.firstName} {user.lastName}
            </p>
            <p>Email: {user.email}</p>
            <img src={user.image} alt="User" />
          </div>
        ))}
    </>
  );
}
