import { useEffect, useState } from "react"
import ItemForm from "../components/ItemForm"
import ItemList from "../components/ItemList"
import axios from "axios";

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const { data } = await axios.get('/api/items');
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Manage Items</h2>
            <ItemForm setItems={setItems} />
            <ItemList items={items} setItems={setItems} />
        </div>
    )
}

export default Home