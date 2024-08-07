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
        <Image src={'/burger-menu.png'} alt='menu-logo' width={40} height={40}/>
        <ProductList handleClose={handleClose} open={open}/>
    </div>
  )
}

export default Producto