'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase =() => setCounter(counter + 1 );
     return (
            <button onClick={increase} className='bg-blue-600 text-white rounded p-3'>
                 {counter}
            </button>
  )
}

export default Counter