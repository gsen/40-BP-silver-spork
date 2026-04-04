import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { updatePassword as setPassword } from "../../api/register";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function updatePassword(event) {
    event.preventDefault();
    try {
      if (userInfo.confirmPassword === userInfo.password) {
        // proceed with update logic
        if (setPassword(userInfo.email, userInfo.password)) {
          navigate("/user");
        }
      } else {
        alert("Passwords do not match");
      }
      console.log(userInfo);
    } catch (ex) {
      alert(ex);
    }
  }

  function handleChange(event) {
    setUserInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <form
      onSubmit={updatePassword}
      className="bg-zinc-100 flex flex-col justify-center items-center gap-4 w-sm p-4 rounded-2xl shadow-xl"
    >
      <header className="text-2xl">
        <h1>Forgot Password</h1>
      </header>
      <fieldset className="flex gap-4">
        <label htmlFor="email">Username</label>
        <input
          className="border rounded-xl p-1"
          type="text"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          ref={inputRef}
        />
      </fieldset>
      <fieldset className="flex gap-4">
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
      <fieldset className="flex gap-4 items-center">
        <label htmlFor="rememberMe">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="border rounded-xl p-1"
          value={userInfo.confirmPassword}
          onChange={handleChange}
        />
      </fieldset>

      <button type="submit" className="bg-black p-1 rounded text-white">
        Reset Password
      </button>
    </form>
  );
}
