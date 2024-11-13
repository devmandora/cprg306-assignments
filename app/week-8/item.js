// week-8/item.js
export default function Item({ item, onSelect }) {
    return (
      <li onClick={() => onSelect(item)}>
        {item.name} - {item.quantity} - {item.category}
      </li>
    );
  }
  