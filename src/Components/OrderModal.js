import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const OrderModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      customer_name: formData.name,
      phone_number: formData.phone,
      home_address: formData.address,
      product_name: product.name,
      product_price: product.price,
    };

    emailjs
      .send(
        'service_ihd5e6r',          // ✅ Your service ID
        'template_bno7fei',         // ✅ Your template ID
        templateParams,
        'EyP7bV0gGzpssv2-T'         // ✅ Your public key
      )
      .then(() => {
        alert('Order placed successfully!');
        onClose();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Error placing order.');
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">
          Order: {product.name} ({product.price})
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-3 py-2 mb-3"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border px-3 py-2 mb-3"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <textarea
          placeholder="Home Address"
          className="w-full border px-3 py-2 mb-3"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          required
        />
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderModal;
