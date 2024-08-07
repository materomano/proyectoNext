'use client'
import React from 'react';
import Link from 'next/link';

const MenuList = ({ open, handleClose }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    handleClose(false);
  };

  return (
    <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
      <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
        <div onClick={handleClick} className='text-white text-right p-4 cursor-pointer'>
          X
        </div>
        <nav className='flex mt-4 flex-col gap-3 px-3'>
          <Link href='carrito' className='text-white p-2' onClick={handleClick} >Carrito</Link>
          <Link href='catalogo' className='text-white p-2' onClick={handleClick} >Catalogo</Link>
          <Link href='productos' className='text-white p-2' onClick={handleClick} >Productos</Link>
          <Link href='admin' className='text-white p-2' onClick={handleClick} >Admin</Link>
        </nav> 
      </aside>
    </div>
  );
};

export default MenuList;

