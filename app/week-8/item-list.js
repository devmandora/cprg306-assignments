// week-8/item-list.js
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} onSelect={() => onItemSelect(item)} />
      ))}
    </ul>
  );
}
