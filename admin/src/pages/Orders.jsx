import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { backendUrl, currency } from "../App.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import { assets } from "../assets/assets.js";
import '../styles/Orders.css'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status: e.target.value}, {headers: {token}})
      if (response.data.success) {
        await fetchAllOrders();
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
      <div>
        <h3>Orders Page</h3>
        <div>
          {
            orders.map((order, index) => (
              <div className="orders-div" key={index}>
                <img src={assets.parcel_icon} alt="" />
                <div>
                  {
                    order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return <p className="order-item-p" key={index}> {item.name} x {item.quantity} <span>{item.size}</span></p>
                      } else {
                        return <p className="order-item-p" key={index}> {item.name} x {item.quantity} <span>{item.size}, </span></p>
                      }
                    })
                  }
                  <p className="order-address-name">{order.address.firstName + " " + order.address.lastName}</p>
                  <div>
                    <p className="order-address-p">{order.address.street + ","}</p>
                    <p className="order-address-p">{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
                  </div>
                  <p className="order-address-p">{order.address.phone}</p>
                </div>
                <div>
                  <p className="order-items-length">Items: {order.items.length}</p>
                  <p className="order-payment-method">Method: {order.paymentMethod}</p>
                  <p className="order-address-p">Payment: {order.payment ? 'Done' : 'Pending'}</p>
                  <p className="order-address-p">Date: {new Date(order.date).toLocaleDateString()}</p>                  
                </div>
                <p className="order-items-length">
                  {currency}{order.amount}
                </p>
                <select onChange={(e) => {statusHandler(e, order._id)}} value={order.status} className="order-select" name="" id="">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            ))
          }
        </div>
      </div>
  );
};

export default Orders;
