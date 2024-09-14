"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";

const CategoriesMenu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const path = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Obtener los productos de Firestore
        const querySnapshot = await getDocs(collection(db, "productos"));
        const products = querySnapshot.docs.map((doc) => doc.data());

        // Verificar los datos de productos obtenidos
        console.log("Productos obtenidos de Firestore:", products);

        // Extraer categorías únicas de los productos
        const categoriesData = products.map((product) => product.category);
        const uniqueCategories = [...new Set(categoriesData)];

        // Filtrar las categorías específicas
        const filteredCategories = uniqueCategories.filter((category) =>
          ["Autos", "Electricos", "Camionetas"].includes(category)
        );

        // Verificar las categorías filtradas
        console.log("Categorías filtradas encontradas:", filteredCategories);

        setCategories(filteredCategories.sort());
      } catch (error) {
        setError(error.message);
        console.error("Error fetching categories from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li
          className={`text-white ${
            path === "/productos" ? "underline" : "no-underline"
          }`}
        >
          <Link href="/productos">Todos</Link>
        </li>

        {/* Mostrar las categorías si no está cargando */}
        {loading && <li className="text-white">Cargando...</li>}
        {!loading && error && <li className="text-white">Error: {error}</li>}
        {!loading && categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className={`text-white ${
                path === `/productos/${category.toLowerCase()}`
                  ? "underline"
                  : "no-underline"
              }`}
            >
              <Link href={`/productos/${category.toLowerCase()}`}>
                {category}
              </Link>
            </li>
          ))
        ) : (
          !loading && <li className="text-white">No hay categorías</li>
        )}
      </ul>
    </div>
  );
};

export default CategoriesMenu;



