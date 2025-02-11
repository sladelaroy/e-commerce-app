import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-div">
        <NavLink className="sidebar-add-link" to="/add">
          <img className="sidebar-add-img" src={assets.add_icon} alt="" />
          <p className="sidebar-add-text">Add items</p>
        </NavLink>

        <NavLink className="sidebar-add-link" to="/list">
          <img className="sidebar-add-img" src={assets.order_icon} alt="" />
          <p className="sidebar-add-text">List Items</p>
        </NavLink>

        <NavLink className="sidebar-add-link" to="/orders">
          <img className="sidebar-add-img" src={assets.order_icon} alt="" />
          <p className="sidebar-add-text">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
