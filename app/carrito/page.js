"use client";
import Image from "next/image";
import { useState } from "react";
import { useCartContext } from "@/app/context/CartContext";
import Boton from "../components/Boton";
import BTNpagar from "../botonpago/BTNpagar";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, getTotalQuantity } = useCartContext();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const totalPrice = getTotalPrice();
  const totalQuantity = getTotalQuantity();

  const handlePayment = () => {
    setShowPaymentForm(true); // Mostrar el formulario de pago
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="border-b border-gray-300 py-2">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/3">
                    <div className="rounded overflow-hidden shadow-lg">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={250}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col md:flex-row items-center justify-between">
                    <div className="px-4">
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">{item.description}</p>
                      <div className="text-gray-800">CANTIDAD: {item.quantity}</div>
                      <span className="text-xl font-bold text-gray-900">
                        ${item.price}
                      </span>
                    </div>

                    <div className="mt-4 md:mt-0 md:ml-4 text-right">
                      <Boton onClick={() => removeFromCart(item.id)} className="p-3 bg-red-500 text-white rounded">
                        Eliminar
                      </Boton>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Cantidad Total: {totalQuantity} productos
            </h2>
            <h2 className="text-xl font-semibold">
              Total a Pagar: ${totalPrice.toFixed(2)}
            </h2>

            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="bg-red-500 text-white py-2 px-4 rounded mt-2"
              >
                Vaciar Carrito
              </button>
            )}
          </div>

          <form className="bg-white p-6 rounded shadow-md w-full max-w-lg  mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Nombre Completo</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Dirección</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <button
              onClick={handlePayment}
              className="bg-green-500 text-white py-2 px-4 rounded mt-2 w-full"
              disabled={cart.length === 0}
            >
              Terminar mi compra
            </button>
          </form>

          {showPaymentForm && <BTNpagar />}
        </div>
      )}
    </div>
  );
};

export default CartPage;


