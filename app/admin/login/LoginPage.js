"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useAuthContext } from "@/app/context/AuthContext";
import LoginForm from "@/app/components/admin/LoginForm";
import { db } from "@/app/firebase/config";

const AdminPage = () => {
  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user.logged) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    } catch (error) {
      console.error("Error al obtener los productos: ", error);
      setError("No se pudieron cargar los productos.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user.logged) {
    return <LoginForm />;
  }

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Administra los productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{product.title}</span>
              {/* Tu lógica para actualizar productos */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
