"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
    // Initialize state with data from items.json
    const [items, setItems] = useState(itemsData);

    // Event handler to add a new item to the list
    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Shopping List</h1>
            {/* NewItem component with handleAddItem passed as a prop */}
            <NewItem onAddItem={handleAddItem} />
            {/* ItemList component with items state passed as a prop */}
            <ItemList items={items} />
        </div>
    );
}
