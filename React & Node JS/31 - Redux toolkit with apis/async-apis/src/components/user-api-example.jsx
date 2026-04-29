import React from "react";
import { useFetchUserByIdQuery } from "../api/service/users";

export default function UserQueryExample() {
  const { data, error, isLoading } = useFetchUserByIdQuery(2);
  return (
    <div>
      <h1>With React Query </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>
            Name: {data.firstName} {data.lastName}
          </p>
          <p>Email: {data.email}</p>
          <img src={data.image} alt="User" />
        </div>
      )}
    </div>
  );
}
