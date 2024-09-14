"use client";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const registerUser = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      setUser({
        logged: true,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser({
        logged: true,
        email: result.user.email,
        uid: result.user.uid,
      });
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setUser({
        logged: false,
        email: null,
        uid: null,
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, googleLogin, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};


