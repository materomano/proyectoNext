'use client';
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { db } from '@/app/firebase/config';
import Image from "next/image";
import Boton from "@/app/components/Boton";
import { useCartContext } from "@/app/context/CartContext";
import { collection, where, query, getDocs } from "firebase/firestore";
import Spinner from "@/app/producto/[id]/Spinner"; // Importa el componente Spinner

const ProductDetail = () => {
  const { id } = useParams(); // Obtén el id de los parámetros de la URL
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchProducts = async () => {
      if (id) {
        setLoading(true);
        const product = await getProduct(id);
        console.log(product);
        setSingleProduct(product);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  const getProduct = async (id) => {
    try {
      const productsRef = collection(db, "productos");
      const q = query(productsRef, where("id", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const productData = querySnapshot.docs[0].data();
       
        return productData;
      } else {
        console.log("Producto no encontrado");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      return null;
    }
  };

  const handleAddToCart = () => {
    if (singleProduct) {
      addToCart(singleProduct);
      alert(`"${singleProduct.title}" ha sido agregado al carrito!`);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner /> // Reemplaza el texto de carga con el spinner
      ) : singleProduct ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 item-center">
          <div className="px-6 py-4">
            <div className="relative">
              <Image
                src={singleProduct.image}
                alt={singleProduct.title}
                width={400}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="font-bold text-xl mb-2">
              {singleProduct.title}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 text-base">
                {singleProduct.description}
              </p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {singleProduct.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ${singleProduct.price}
            </span>
          </div>
          <div className="flex justify-center py-4">
            <Boton onClick={handleAddToCart} className="p-3">
              Agregar al carrito
            </Boton>
          </div>
        </div>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </>
  );
};

export default ProductDetail;

