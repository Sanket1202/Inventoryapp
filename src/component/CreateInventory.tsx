import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CreateInventory.css"



interface InventoryItem {
  id: string;
  name: string;
  quantity: string;
}
function CreateInventory() {
  const [itemId, setItemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [showData, setShowData] = useState(false);
  const [updateItemId, setUpdateItemId] = useState('');
  const [updateItemName, setUpdateItemName] = useState('');
  const [updateItemQuantity, setUpdateItemQuantity] = useState('');

  const handleCreate = () => {
    if (itemId.trim() === '' || itemName.trim() === '' || itemQuantity.trim() === '') return;

    const newItem: InventoryItem = { id: itemId, name: itemName, quantity: itemQuantity };
    setInventory([...inventory, newItem]);

    setItemId('');
    setItemName('');
    setItemQuantity('');
    setShowData(true);
  };

  const handleUpdate = () => {
    if (updateItemId.trim() === '' || updateItemName.trim() === '' || updateItemQuantity.trim() === '') return;

    const updatedInventory = inventory.map((item) => {
      if (item.id === updateItemId) {
        return {
          id: updateItemId,
          name: updateItemName,
          quantity: updateItemQuantity,
        };
      }
      return item;
    });

    setInventory(updatedInventory);
    setItemId(updateItemId);
    setItemName(updateItemName);
    setItemQuantity(updateItemQuantity);
    setShowData(true);
  };

  const handleDelete = (itemId: string) => {
    const updatedInventory = inventory.filter((item) => item.id !== itemId);
    setInventory(updatedInventory);
  };

  const handleUpdateClick = (item: InventoryItem) => {
    setUpdateItemId(item.id);
    setUpdateItemName(item.name);
    setUpdateItemQuantity(item.quantity);
  };

  return (
    <div className='container'>
      <div className='card'>
      <h2>Create Inventory</h2>
      <div>
        <label>Item id:</label>
        <input className='card-create' type="text" placeholder='Enter Id' value={itemId} onChange={(e) => setItemId(e.target.value)} />
      </div>
      <div>
        <label>Item Name:</label>
        <input className='card-create' type="text" placeholder='Enter Item Name' value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div>
        <label>Item Quantity:</label>
        <input className='card-create' type="text" placeholder='Enter Item Quantity' value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
      </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleCreate}>
        Create
      </button>
      <div className='card'>
      <div>
        <h2>For Update</h2>
        <label>Update Item Id:</label>
        <input className='card-create' placeholder='Enter Id' type="text" value={updateItemId} onChange={(e) => setUpdateItemId(e.target.value)} />
      </div>
      <div>
        <label>Update Item Name:</label>
        <input className='card-create' placeholder='Enter ItemName' type="text" value={updateItemName} onChange={(e) => setUpdateItemName(e.target.value)} />
      </div>
      <div>
        <label>Update Item Quantity:</label>
        <input className='card-create' placeholder='Enter ItemQuantity' type="text" value={updateItemQuantity} onChange={(e) => setUpdateItemQuantity(e.target.value)} />
      </div>
      </div>
      <button type="button" className="btn btn-success" onClick={handleUpdate}>
        Update
      </button>
      <div className='card-item'>
      <h3>Inventory Items:</h3>
      {inventory.map((item: InventoryItem, index: number) => (
        <div key={index}>
          <p>Item id: {item.id}</p>
          <p>Item Name: {item.name}</p>
          <p>Item Quantity: {item.quantity}</p>
          {/* <button onClick={() => handleUpdateClick(item)}>Update</button> */}
          <button  className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default CreateInventory;