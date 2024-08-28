import ProductList from '@/app/components/ProductList';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

const getProducts = async (category) => {
  try {
    const productRef = collection(db, 'productos');
    let q;
    if (category === 'all') {
      q = query(productRef);
    } else {
      q = query(productRef, where('category', '==', category));
    }
    const querySnapshots = await getDocs(q);
    const docs = querySnapshots.docs.map((doc) => doc.data());
    return docs;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export async function getServerSideProps({ params }) {
  const { category } = params;
  const products = await getProducts(category);
  return { props: { category, products } };
}

const Tipo = ({ category, products }) => {
  console.log({ products });

  return (
    <>
      <h1>Esta página es por la categoría: {category}</h1>
      <ProductList category={category} products={products} />
    </>
  );
};

export default Tipo;


