import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    // State to manage form inputs for name, quantity, and category
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Create a new item object with a unique ID
        const newItem = {
            id: Date.now().toString(), // or you could use a library like uuid for a more unique ID
            name,
            quantity,
            category,
        };

        // Call the onAddItem function to add the new item to the list
        onAddItem(newItem);

        // Reset the form fields
        setName('');
        setQuantity('');
        setCategory('');
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
}
