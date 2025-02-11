// import React from 'react'
import { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password
      });

      if (response.data.success) {
        setToken(response.data.token)
        toast.success(response.data.message)
      }

      console.log(response);
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  };
  return (
    <div className="login-form-container">
      <div className="login-form-div">
        <h1 className="login-form-div-h1">Admin Panel</h1>
        <form className="login-form" onSubmit={onSubmitHandler}>
          <div className="login-form-input-div">
            <p className="login-form-p">Email Address</p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="login-form-input-div">
            <p className="login-form-p">Password</p>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button className="login-form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
