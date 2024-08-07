import React from 'react'

const Boton = ({children, className='', ...args}) => {
  return (
    <button className={`rounded-lg py=2 bg-blue-600 text-white ${className} ` }{...args}>
            {children}
    </button>
  )
}

export default Boton