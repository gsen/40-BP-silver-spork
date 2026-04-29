import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUserById, reset, fetchUserByIdReject } from "../store/user-slice";

export default function User() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchUser());
  }

  function getUserById() {
    dispatch(fetchUserById(3));
  }

  function showError() {
    dispatch(fetchUserByIdReject(3));
  }

  function onResetClick() {
    dispatch(reset());
  }

  return (
    <div>
      <button onClick={handleClick}>Get Random User</button>
      <button onClick={getUserById}>Get User by ID</button>
      <button onClick={showError}>Show Error</button>
      <button onClick={onResetClick}>Reset</button>
      <h1>User</h1>
      {userState.loading && <p>Loading...</p>}
      {userState.error && <p>Error: {userState.error}</p>}
      {userState.data && (
        <div>
          <p>
            Name: {userState.data.name.first} {userState.data.name.last}
          </p>
          <p>Email: {userState.data.email}</p>
          <img src={userState.data.picture.large} alt="User" />
        </div>
      )}
    </div>
  );
}
