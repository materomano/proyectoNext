"use client";
import ProductList from '@/app/components/ProductList';
import { useParams } from 'next/navigation';
import React from 'react';

import { mockData } from '@/app/data/Products';

const Tipo = () => {
  const params = useParams();
  const category = params.category;
  console.log('Categoría recibida de useParams:', category);  // Verifica el valor de category

  const filterData = category === 'all'
    ? mockData 
    : mockData.filter(item => item.category.toLowerCase() === category);
  console.log('Datos filtrados:', filterData);  // Verifica los datos filtrados

  return (
    <>
      <h1>Esta página es por la categoría: {category}</h1>
      <ProductList category={category} data={filterData} />
    </>
  );
};

export default Tipo;


