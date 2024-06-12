"use client"
// src/components/Cart.js
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, e.target.value)}
              className="mt-2 p-2 border rounded-lg w-16"
            />
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
