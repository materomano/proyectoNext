"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Boton from '../components/Boton';

const Catalogo = () => {
 const router = useRouter();
    return (
    <>
         <h1>esta pagina esta en construccion</h1>
         <Boton onClick={() => router.back() } className='p-3'>volver a la pagina anterior</Boton>
    </>
 
  )
}

export default Catalogo