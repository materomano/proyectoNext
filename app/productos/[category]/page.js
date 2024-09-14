import ProductList from '@/app/components/ProductList';
import React from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

const getProducts = async (category) => {
  try {
    const productRef = collection(db, 'productos');
    const q = category === 'all'
      ? query(productRef)
      : query(productRef, where('category', '==', category));

    const querySnapshots = await getDocs(q);
    const docs = querySnapshots.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return docs;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const Tipo = async ({ params }) => {
  const { category } = params;
  const products = await getProducts(category);

  return (
    <>
      <h1>Esta página es por el tipo: {category}</h1>
      <ProductList categoryFilter={category} products={products} />
    </>
  );
};

export default Tipo;

