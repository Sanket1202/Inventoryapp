import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,useNavigate,} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CreateInventory from "./component/CreateInventory";
import DeleteInventory from "./component/DeleteInventory";



// interface InventoryItem {
//   id: string;
//   name: string;
//   quantity: string;
// }

// const App = () => {
//   const [inventory, setInventory] = useState('');
const App: React.FC = () => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState<any>([]);
  const handleClick = (path: any) => {
    navigate(path);
  };

  const getData = (data: any) => {
    console.log(data); // setTaskData([,data])
    let existingData: any = localStorage.getItem("tasksData");
    console.log(existingData, "existingData");
    let temp: any;
    if (existingData !== undefined && existingData !== null) {
      temp = [...JSON.parse(existingData), data];
    } else {
      temp = [data];
    }
    console.log(temp);
    localStorage.setItem("tasksData", JSON.stringify(temp));
  };
  useEffect(() => {
    console.log(taskData, "tasks");
  });

  return (
    <>
        {/*Navigation bar*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={() => handleClick("/")}
                >
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/delete"
                  onClick={() => handleClick("/delete")}
                >
                  delete
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/update"
                  onClick={() => handleClick("/update")}
                >
                  Update
                </a>
              </li>
            </ul>
          </div>
        </nav>

    <Router>
      <div className="app">
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<CreateInventory />} />
            <Route path="/delete" element={<DeleteInventory />} />
            {/* <Route
              path="/update"
              element={
                <UpdateInventory
                  inventory={inventory}
                  setInventory={setInventory}
                />
              }
            /> */}
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
