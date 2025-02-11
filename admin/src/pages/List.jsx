import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { currency } from "../App";
import "../styles/List.css";

const List = ({token}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeProduct = async(id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers: {token}})
      if(response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="list-all-product-title">All Product List</p>

      <div className="list-table-title-container">
        <div className="list-table-title-div">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {
          list.map((item, index) => (
            <div className="list-item-div" key={index}>
              <img className="list-item-img" src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={() => {removeProduct(item._id)}} className="list-item-x">X</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default List;
