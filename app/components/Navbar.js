import React from 'react'
import Image from 'next/image'
import Producto from './Menu'

const Navbar = () => {
  return (
    <div className='w-[98%] bg-gray-600'>
        <div className='container m-auto py-4 flex justify-between items-center'>
            <Image src={'/logo-coder.png'} alt='logo-coder' width={200} height={50}/>
            <Producto/>
        </div>


    </div>
  )
}

export default Navbar