"use client";

import { useAuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user.logged) {
      router.push("/loginForm"); // Redirige al login si el usuario no está autenticado
    }
  }, [user, router]);

  if (!user.logged) {
    return null; // Muestra nada mientras se redirige
  }

  return <>{children}</>;
};

export default ProtectedRoute;
