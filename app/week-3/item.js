
import Link from "next/link";
export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 border-b border-gray-200 flex justify-between items-center">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-600">Quantity: {quantity}</span>
        <span className="text-gray-400">Category: {category}</span>
      </li>
    );
  }
  