// components/InventoryList.tsx
import React from 'react';

interface InventoryItem {
  id: string;
  name: string;
  quantity: string;
}

interface Props {
  inventory: InventoryItem[];
}

const InventoryList: React.FC<Props> = ({ inventory }) => {
  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            <strong>Item ID:</strong> {item.id}
            <br />
            <strong>Name:</strong> {item.name}
            <br />
            <strong>Quantity:</strong> {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;