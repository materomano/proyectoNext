import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SkeletonProduct from '../productos/[category]/SkeletonProduct';

const ProductList = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => setLoading(false), 2000);
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
    <div className="flex flex-wrap justify-center items-center">
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

