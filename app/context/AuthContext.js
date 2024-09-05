"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/config";

const AuthContext = createContext();

// Asegúrate de que esta línea exporte correctamente el hook
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });
  const registerUser = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    setUser({
      logged: true,
      email: userCredential.user.email,
      uid: userCredential.user.uid
    })
  }
  return (
    <AuthContext.Provider value={{ user, registerUser}}>
      {children}
    </AuthContext.Provider>
  );
};
