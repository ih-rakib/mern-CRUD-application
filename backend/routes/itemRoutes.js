import express from 'express';
import Item from '../models/itemModel.js';
const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();

        if (items.length === 0) {
            return res.status(404).json({ message: 'No items found' });
        }

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server error: Unable to retrieve items', error: error.message });
    }
});

// POST a new item
router.post('/add', async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const newItem = new Item({ name, description, price });
        const savedItem = await newItem.save();
        res.status(201).json({ message: "Item added successfully", savedItem });
    } catch (error) {
        res.status(400).json({ message: 'Error saving item', error: error.message });
    }
})

// Update an item
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const updatedItem = await Item.findByIdAndUpdate(id, { name, description, price }, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.status(200).json({ message: 'Item updated successfully', updatedItem });
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error: error.message });
    }
});


// DELETE an item
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndDelete(id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error: Unable to delete item', error: error.message });
    }
})

export default router;
