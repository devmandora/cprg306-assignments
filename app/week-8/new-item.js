// week-8/new-item.js
import { useState } from "react";

export default function NewItem({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (name && quantity && category) {
      onAdd({ name, quantity, category });
      setName("");
      setQuantity("");
      setCategory("");
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" />
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
}
