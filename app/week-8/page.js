// week-8/page.js
"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Event handler to handle item selection and clean up the item name
  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].trim().replace(/[^a-zA-Z\s]/g, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <NewItem onAdd={(newItem) => setItems([...items, newItem])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
}
