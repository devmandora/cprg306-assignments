"use client";
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Item Quantity</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 bg-red-500 text-white rounded ${
            quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 bg-green-500 text-white rounded ${
            quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
