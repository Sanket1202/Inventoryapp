import React, { useState } from 'react';
import CreateInventory from './CreateInventory';

interface InventoryItem {
  id: string;
  name: string;
  quantity: string;
}

const DeleteInventory: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [itemId, setItemId] = useState('');

  const handleDelete = () => {
    const updatedInventory = inventory.filter((item) => item.id !== itemId);
    setInventory(updatedInventory);
    setItemId('');
  };

  return (
    <div>
      <h2>Delete Inventory</h2>
      <h3>Here you can delete</h3>
      <div>
        <label>Item ID:</label>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteInventory;