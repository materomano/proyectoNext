'use client'
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { db } from '@/app/firebase/config';
import Image from "next/image";
import Boton from "@/app/components/Boton";
import { useCartContext } from "@/app/context/CartContext";
import { collection, where, query, getDocs } from "firebase/firestore";
import Spinner from "@/app/producto/[id]/Spinner";

export const generateStaticsParams = () => {
  return [
    {category: 'Autos'},
    {category: 'Camionetas'},
    {category: 'Electricos'}
  ]
}

const ProductDetail = () => {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchProducts = async () => {
      if (id) {
        setLoading(true);
        const product = await getProduct(id);
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
        
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      return null;
    }
  };

  const handleAddToCart = () => {
    if (singleProduct) {
      const productWithQuantity = { ...singleProduct, quantity };
      addToCart(productWithQuantity);
      alert(`"${singleProduct.title}" ha sido agregado al carrito!`);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < singleProduct.inStock) {
      setQuantity((prev) => prev + 1);
    } else {
      alert(`No puedes agregar más de ${singleProduct.inStock} unidades de este producto.`);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : singleProduct ? (
        <div className="flex flex-col md:flex-row rounded overflow-hidden shadow-lg m-4 items-center">

          <div className="md:w-1/2 w-full p-2 flex justify-center">
            <div className="relative">
              <Image
                src={singleProduct.image}
                alt={singleProduct.title}
                width={400}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Product Details Container */}
          <div className="md:w-1/2 w-full px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center md:text-left">{singleProduct.title}</div>
            <p className="text-gray-700 text-base mb-4 text-center md:text-left">{singleProduct.description}</p>

            <div className="mb-4 text-center md:text-left">
              <span className="text-xl font-bold">${singleProduct.price}</span>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Boton
                onClick={handleDecreaseQuantity}
                className="p-2"
              >
                -
              </Boton>
              <span className="text-lg p-4">{quantity}</span>
              <Boton
                onClick={handleIncreaseQuantity}
                className="p-2"
              >
                +
              </Boton>
            </div>

            <div className="flex justify-center md:justify-start py-4">
              <Boton onClick={handleAddToCart} className="p-3">
                Agregar al carrito
              </Boton>
            </div>
          </div>
        </div>

      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </>
  );
};

export default ProductDetail;



