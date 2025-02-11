import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import "./App.css";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'
console.log(backendUrl)

function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  useEffect(()=> {
    localStorage.setItem('token', token)
  }, [token])
  return (
    <>
      <div className="app-container">
        <ToastContainer/>
        {token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Navbar setToken={setToken} />
            <hr />
            <div className="app-sidebar-container">
              <Sidebar />
              <div className="app-routes-div">
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
