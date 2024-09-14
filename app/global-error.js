'use client'
import Boton from '@/app/components/Boton';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ErrorProduct = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error); // Cambié console.log a console.error para claridad en la consola
  }, [error]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>Ocurrió un error:</h1>
      <p>{error.message}</p> {/* Muestra el mensaje del error */}
      <Boton onClick={reset}>Volver</Boton>
    </div>
  );
};

export default ErrorProduct;
