import { useContext } from "react";
import { AuthContext } from "../providers/auth";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="p-4">
      <nav className="flex gap-4 justify-end items-center ">
        <span>{user.name}</span>
        <button className="bg-black p-1 rounded text-white cursor-grab" onClick={logout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
