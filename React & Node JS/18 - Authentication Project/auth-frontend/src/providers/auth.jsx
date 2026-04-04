import { useEffect, useState } from "react";
import { getItem, setItem } from "../helpers/storage";
import { CURRENT_USER, USERS } from "../helpers/common";
import { createContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let currentUser = getItem(CURRENT_USER) ?? getItem(CURRENT_USER, "session");
    if (currentUser) {
      setUser(currentUser);
      navigate("/");
    }
  }, []);

  function authenticateUser(username, password, persistUser) {
    const users = getItem(USERS);
    const userInfo = users.find((user) => user.email === username && user.password === password);
    if (userInfo) {
      setUser({
        username: userInfo.email,
        name: userInfo.name,
      });

      setItem(CURRENT_USER, userInfo, persistUser ? "local" : "session");
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    setItem(CURRENT_USER, null);
    setItem(CURRENT_USER, null, "session");
    navigate("/user");
  }

  return <AuthContext value={{ user, authenticateUser, logout }}>{children}</AuthContext>;
}
