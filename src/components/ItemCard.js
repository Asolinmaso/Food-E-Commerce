// src/components/ItemCard.js
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={`/images/${item.image}.jpg`} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <button
          onClick={() => addToCart(item)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
