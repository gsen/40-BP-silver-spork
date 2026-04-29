import React from "react";
import { useAddUserMutation } from "../api/service/users";

export default function UserAdd() {
  const [addUser, { isLoading }] = useAddUserMutation();
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    console.log(await addUser({ firstName, lastName, email }).unwrap());
    setUser({ firstName: "", lastName: "", email: "" });
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
}
