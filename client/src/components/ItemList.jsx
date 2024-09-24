// src/components/ItemList.jsx
import axios from 'axios';

const ItemList = ({ items, setItems }) => {
    if (!items || items.length === 0) {
        return <p className="text-gray-500">No items to display.</p>;
    }

    const handleDelete = async (id) => {
        await axios.delete(`/api/items/delete/${id}`);
        setItems(items.filter((item) => item._id !== id));
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-2xl font-bold mb-4">Item List</h3>
            <ul>
                {items.map((item) => (
                    <li key={item._id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b">
                        <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            <p>{item.description}</p>
                            <p className="text-green-600 font-bold">${item.price}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500 mt-3 md:mt-0"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
