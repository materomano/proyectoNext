import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='w-[98%] bg-gray-100 border-t mt-10 items-center px-15'>
      <div className='container m-auto py-2 text-sm text-gray-700 flex justify-between items-center'>
        <p>Desarrollado por Mateo</p>
        <div>
          <p>Power by</p>
          <Image src={'/next.svg'} alt='next logo'width={50} height={50}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer