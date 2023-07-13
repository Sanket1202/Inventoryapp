import React, { useState } from 'react';

interface InventoryItem {
  id: string;
  name: string;
  quantity: string;
}

const UpdateInventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [itemId, setItemId] = useState('');
  const [updatedItemName, setUpdatedItemName] = useState('');
  const [updatedItemQuantity, setUpdatedItemQuantity] = useState('');

  const handleUpdate = () => {
    if (Array.isArray(inventory) && inventory.length > 0) {
      const itemIndex = inventory.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const updatedInventory = [...inventory];
        updatedInventory[itemIndex] = {
          ...updatedInventory[itemIndex],
          name: updatedItemName,
          quantity: updatedItemQuantity,
        };
        setInventory(updatedInventory);
      }
    }

    setItemId('');
    setUpdatedItemName('');
    setUpdatedItemQuantity('');

    // Redirect to main page
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Update Inventory</h2>
      <h3>Here you can update Item Name and Quantity!</h3>
      <div>
        <label>Item ID:</label>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </div>
      <div>
        <label>Updated Item Name:</label>
        <input
          type="text"
          value={updatedItemName}
          onChange={(e) => setUpdatedItemName(e.target.value)}
        />
      </div>
      <div>
        <label>Updated Item Quantity:</label>
        <input
          type="text"
          value={updatedItemQuantity}
          onChange={(e) => setUpdatedItemQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateInventory;
