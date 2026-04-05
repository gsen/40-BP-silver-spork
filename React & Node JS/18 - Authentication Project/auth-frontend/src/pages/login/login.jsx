import { Link, useNavigate } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/auth";

export default function Login() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function login(event) {
    event.preventDefault();
    console.log(userInfo);
    if (await authenticateUser(userInfo.email, userInfo.password, userInfo.rememberMe)) {
      navigate("/");
    }
  }

  function handleChange(event) {
    setUserInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <form
      onSubmit={login}
      className="bg-zinc-100 flex flex-col justify-center items-center gap-4 w-sm p-4 rounded-2xl shadow-xl"
    >
      <header className="text-2xl">
        <h1>Login</h1>
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
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          className="size-4"
          value={userInfo.rememberMe}
          onChange={(event) => {
            setUserInfo((prev) => ({ ...prev, rememberMe: event.target.checked }));
          }}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </fieldset>

      <button type="submit" className="bg-black p-1 rounded text-white">
        Login
      </button>

      <section className="flex  justify-around size-full">
        <Link to={"/user/signup"}>Create Account</Link>
      </section>

      <footer>
        <Link to={"/user/forgotPassword"} className="underline">
          Forgot Password
        </Link>
      </footer>
    </form>
  );
}
