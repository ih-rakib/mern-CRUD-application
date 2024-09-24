import { useState } from 'react';
import axios from 'axios';

const UpdateItemForm = ({ item, setItems, setEditingItem }) => {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedItem = { name, description, price };
            const { data } = await axios.put(`/api/items/update/${item._id}`, updatedItem);
            setItems((prev) =>
                prev.map((cur) => (cur._id === item._id ? data.updatedItem : cur))
            );
            setEditingItem(null);
        } catch (error) {
            console.error('Error updating item:', error.response?.data?.message || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md mb-6">
            <h3 className="text-2xl font-bold mb-4">Update Item</h3>
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
            <button type="submit" className="bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-500">Update Item</button>
            <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="ml-4 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
                Cancel
            </button>
        </form>
    );
};

export default UpdateItemForm;
