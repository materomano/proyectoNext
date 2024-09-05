"use client";

import React from 'react';
import { useAuthContext } from '@/app/context/AuthContext'; // Verifica que la ruta sea correcta
import LoginPage from './login/LoginPage';

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext(); // Llama al hook para acceder al contexto

  return (
    <div>
      {user.logged ? children : <LoginPage/>}
    </div>
  );
};

export default AdminLayout;
