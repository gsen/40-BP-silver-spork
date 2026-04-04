import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { registerUser as register } from "../../api/register";
export default function Signup() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function registerUser(event) {
    event.preventDefault();
    console.log({ userInfo });
    if (register(userInfo)) {
      navigate("/user");
    }
  }

  function handleChange(event) {
    console.log("change called", event.target.name, event.target.value);
    setUserInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <form
      onSubmit={registerUser}
      className="bg-zinc-100 flex flex-col justify-center items-center gap-4 w-sm p-4 rounded-2xl shadow-xl"
    >
      <header className="text-2xl ">
        <h1 className="font-semibold">Sign up</h1>
        <h2 className="text-xl">Enter your details</h2>
      </header>

      <section className="flex flex-col gap-4 my-4">
        <fieldset className="flex gap-4 justify-between items-center">
          <label htmlFor="username">Email</label>
          <input
            ref={inputRef}
            className="border rounded-xl p-1"
            type="email"
            id="username"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="flex gap-4 justify-between items-center">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-xl p-1"
            value={userInfo.password}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="flex gap-4 justify-between items-center">
          <label htmlFor="name">Full Name</label>
          <input
            className="border rounded-xl p-1"
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </fieldset>
      </section>

      <button type="submit" className="bg-black p-1 rounded text-white">
        Register
      </button>

      <footer>
        <p>
          Already registered?{" "}
          <Link className="underline" to={"/user"}>
            Login
          </Link>
        </p>
      </footer>
    </form>
  );
}
