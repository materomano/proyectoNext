import React, { useState } from 'react';

const BTNpagar = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica del pago, como llamar a una API de pago.
    console.log('Datos del formulario:', formData);
    alert('Pago procesado correctamente');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Información de Pago</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Nombre Completo</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Dirección</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Número de Tarjeta</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          maxLength="16"
          pattern="\d{16}"
          placeholder="1234 5678 9012 3456"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Fecha de Expiración</label>
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          placeholder="MM/AA"
          pattern="\d{2}/\d{2}"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">CVV</label>
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          maxLength="3"
          pattern="\d{3}"
          placeholder="123"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        Pagar
      </button>
    </form>
  );
};

export default BTNpagar;
