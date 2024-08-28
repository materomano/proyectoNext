"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import ProductList from './MenuList';

const Producto = () => {
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose= () => setOpen(false);
    return (
    <div onClick={handleOpen}>
        
        <ProductList handleClose={handleClose} open={open}/>
    </div>
  )
}

export default Producto