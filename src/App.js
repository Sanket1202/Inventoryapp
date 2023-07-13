import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header.tsx';
import Footer from './component/Footer.tsx';
import CreateInventory from './component/CreateInventory.tsx';
import DeleteInventory from './component/DeleteInventory.tsx';
import UpdateInventory from './component/UpdateInventory.tsx';
import UpdateSuccess from './component/UpdateSuccess.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<CreateInventory />} />
            <Route path="/delete" element={<DeleteInventory />} />
            <Route path="/update" element={<UpdateInventory />} />
            <Route path="/update-success" element={<UpdateSuccess />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
