"use client";
import Image from "next/image";
import { useCartContext } from "@/app/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, getTotalQuantity } = useCartContext();
  const totalPrice = getTotalPrice();
  const totalQuantity = getTotalQuantity();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b border-gray-300 py-2">
                <div className="flex items-center justify-between">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="object-cover"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">{item.description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {item.category}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800">Cantidad: {item.quantity}</p>
                    <p className="text-gray-800">Total: ${item.price * item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
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
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded mt-2"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;




