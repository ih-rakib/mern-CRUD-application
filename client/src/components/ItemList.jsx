import { useState } from 'react';
import axios from 'axios';
import UpdateItemForm from './UpdateItemForm';

const ItemList = ({ items, setItems }) => {
    const [editingItem, setEditingItem] = useState(null);

    const handleDelete = async (id) => {
        await axios.delete(`/api/items/delete/${id}`);
        setItems(items.filter((item) => item._id !== id));
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-2xl font-bold mb-4">Item List</h3>
            {editingItem ? (
                <UpdateItemForm item={editingItem} setItems={setItems} setEditingItem={setEditingItem} />
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item._id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b">
                            <div>
                                <h4 className="text-xl font-semibold">{item.name}</h4>
                                <p>{item.description}</p>
                                <p className="text-green-600 font-bold">${item.price}</p>
                            </div>
                            <div className="flex space-x-4 mt-3 md:mt-0">
                                <button
                                    onClick={() => setEditingItem(item)}
                                    className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
