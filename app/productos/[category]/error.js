'use client'
import Boton from '@/app/components/Boton'
import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'

const ErrorProduct = ({error, reset}) => {

    useEffect(() =>{
        console.log(error);

        
    }, [error])

    const router = useRouter();
    const handleBack = () => {
        router.back();
    }
  return (
    <div>
        <h1>No se ha podido encontrar el error</h1>
        <Boton onClick={reset}>Volver</Boton>
    </div>
  )
}

export default ErrorProduct