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
      <aside>
        {/* Responsive navigation menu */}
        <nav className='flex  md:flex-row mt-4 gap-3 px-3 md:px-6'>
          <Link href='/' className='text-white p-2 md:p-3' onClick={handleClick}>
            Inicio
          </Link>
          <Link href='/productos' className='text-white p-2 md:p-3' onClick={handleClick}>
            Productos
          </Link>
          <Link href='/admin' className='text-white p-2 md:p-3' onClick={handleClick}>
            Admin
          </Link>
          <Link href='/catalogo' className='text-white p-2 md:p-3' onClick={handleClick}>
            Catálogo
          </Link>
          <Link href='/carrito' onClick={handleClick}>
            <Image
              src='/carritoto.png'
              alt='menu-logo'
              width={45}
              height={40}
              className='w-[45px] h-[40px] mx-auto md:mx-0'
            />
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;

