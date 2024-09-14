import React from 'react';
import Image from 'next/image';
import Producto from './Menu';

const Navbar = () => {
  return (
    <div className='w-[98%] bg-gray-600'>
      <div className='container m-auto py-4 flex justify-between items-center'>
        {/* Imagen solo visible en pantallas menores a 700px (usando `md:hidden` para ocultar en pantallas grandes) */}
        <Image 
          src='/car.png' 
          alt='logo-coder' 
          width={200} 
          height={50} 
          className='hidden md:block'  // Mostrar solo en pantallas pequeñas (menos de 768px)
        />
        <Producto />
      </div>
    </div>
  );
};

export default Navbar;
