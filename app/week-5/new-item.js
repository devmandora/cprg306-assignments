"use client";
import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
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
              type="button"
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
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Item
        </button>
      </form>
    </div>
  );
}
