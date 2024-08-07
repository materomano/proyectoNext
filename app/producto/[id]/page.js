'use client'
import { useParams } from 'next/navigation'
import  { useState, useEffect } from 'react';
import { mockData } from '../../data/Products';
import Image from 'next/image';
import Boton from '@/app/components/Boton';




const ProductDetail = () => {
  const {id} =  useParams();
  const singleProduct = mockData.find(product => product.id == id);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleAddToCart = () => {
    if (count > 0) {
      const newCart = [...cart];
      const existingProductIndex = newCart.findIndex(item => item.id === singleProduct.id);
      if (existingProductIndex > -1) {
        newCart[existingProductIndex].quantity += count;
      } else {
        newCart.push({ ...singleProduct, quantity: count });
      }
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert('Producto agregado al carrito');
    } else {
      alert('Por favor, selecciona una cantidad válida');
    }
  };

  return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
            <div className='px-6 py-4'>
                <div className='relative'>
                    <Image
                        src={singleProduct.image}
                        alt={singleProduct.title}
                        width={400}  
                        height={250} 
                        className='object-cover'
                    />
                </div>
                <div className='font-bold text-xl mb-2'>
                    {singleProduct.title}
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-700 text-base'>
                        {singleProduct.description}
                    </p>
                   
                </div>
            </div>
            <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {singleProduct.category}
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    ${singleProduct.price}
                </span>
            </div>
            <div className='flex justify-center py-4'> 
            <Boton onClick={handleAddToCart} className='p-3' >Agregar al carrito</Boton>
            
            </div>
            <div className='flex justify-center space-x-4'>
          <Boton onClick={increment} className='p-3'>+</Boton>
          <span>{count}</span>
          <Boton onClick={decrement} className='p-3'>-</Boton>
        </div>
        </div>
    )
}

export default ProductDetail