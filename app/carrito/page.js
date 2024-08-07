'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className='flex justify-between items-center p-4 border-b'>
              <div>
                <span>
                <Image
                        src={product.image}
                        alt={product.title}
                        width={400}  
                        height={250} 
                        className='object-cover'
                    />
                </span>
                <h2 className='text-xl font-bold'>
                  {product.title}

                </h2>
                <p>
                  {product.description}
                  </p>
                <p>
                  ${product.price} 
                  x 
                  {product.quantity}
                  </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;



