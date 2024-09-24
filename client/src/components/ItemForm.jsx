import { useState } from "react";
import axios from 'axios';

const ItemForm = ({ setItems }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!name || !description || !price) {
            setError('All fields are required.');
            return;
        }

        setError('');

        try {
            const newItem = { name, description, price };
            const { data } = await axios.post('/api/items/add', newItem);
            setItems((prev) => [...prev, data.savedItem]);
            setName('');
            setDescription('');
            setPrice('');
        } catch (error) {
            console.error('Error adding item:', error.response?.data?.message || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md mb-6">
            <h3 className="text-2xl font-bold mb-4">Add New Item</h3>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button type="submit" className="bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-600">Add Item</button>
        </form>
    );
}

export default ItemForm;