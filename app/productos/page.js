"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

import ProductList from '../components/ProductList';
import { mockData } from '../data/Products';

const Productos = () => {
 const router = useRouter();
    return (
    <>
        <h1>Productos:</h1>
        <ProductList category={'all'} data={mockData}/>
    </>
 
  )
}

export default Productos