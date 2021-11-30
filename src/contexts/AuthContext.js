import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
// creating the context
const AuthContext = createContext();

// useAuthHook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage(
    {
      user: false,
      token: "",
    },
    "notezy"
  );

  // ? signin

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
