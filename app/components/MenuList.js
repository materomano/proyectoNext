'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MenuList = ({ open, handleClose }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    handleClose(false);
  };

  return (
    <div>
      <aside >
       
        <nav className='flex mt-4 flex gap-3 px-3'>
          <Link href={'/carrito'} className='text-white p-2' onClick={handleClick} >
            <Image src={'/carrito.png'} alt='menu-logo' width={80} height={60 }/>
          </Link>
          <Link href='catalogo' className='text-white p-2' onClick={handleClick} >Catalogo</Link>
          <Link href='productos' className='text-white p-2' onClick={handleClick} >Productos</Link>
          <Link href='admin' className='text-white p-2' onClick={handleClick} >Admin</Link>
        </nav> 
      </aside>
    </div>
  );
};

export default MenuList;

