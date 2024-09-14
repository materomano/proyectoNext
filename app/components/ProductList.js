'use client';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config'; 
import ProductCard from './ProductCard';
import SkeletonProduct from '../productos/[category]/SkeletonProduct';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(products);
      } catch (error) {
        throw new Error('Error fetching products from Firestore: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductList;


