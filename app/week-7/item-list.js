import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortedItems, setSortedItems] = useState(items);

    function sortByName() {
        const sorted = [...sortedItems].sort((a, b) => a.name.localeCompare(b.name));
        setSortedItems(sorted);
    }

    function sortByQuantity() {
        const sorted = [...sortedItems].sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity));
        setSortedItems(sorted);
    }

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <button onClick={sortByName}>Sort by Name</button>
                <button onClick={sortByQuantity}>Sort by Quantity</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}
