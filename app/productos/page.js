"use client"
import { useRouter } from 'next/navigation'
import React, { Suspense } from 'react'

import ProductList from '../components/ProductList';
import { mockData } from '../data/Products';

const Productos = () => {
 const router = useRouter();
    return (
    <>
        <h1>Productos:</h1>
        <Suspense fallback={<div>Loading!!!</div>}>

          <ProductList category={'all'} data={mockData}/>
        </Suspense>
        
    </>
 
  )
}

export default Productos