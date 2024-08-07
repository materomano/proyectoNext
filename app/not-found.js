'use client';
import React from 'react'
import Boton from './components/Boton'
import { useRouter } from 'next/navigation';
const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <h1>Pagina no encontrada</h1>
      <Boton onClick={() => router.back()} className='p-3'>Volver hacia atras</Boton>
    </>
  )
}

export default NotFound