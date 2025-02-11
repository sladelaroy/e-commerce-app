import React, { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password
        });
        if (response.data.success) {
          toast.success("Sign Up Successful");
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login Successful")
        } else {
          toast.error(response.data.message)
        }
      }

      // if (response.data.success) {
      //   setToken(response.data.token);
      //   localStorage.setItem("token", response.data.token);
      // } else {
      //   toast.error(response.data.message);
      // }
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      <div className="login-form-div">
        <p className="login-form-current-state">{currentState}</p>
        <hr className="login-form-hr" />
      </div>
      {currentState === "Sign Up" ? (
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          className="login-form-input"
          type="text"
          placeholder="Name"
          required
        />
      ) : (
        ""
      )}
      <input
        className="login-form-input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="login-form-input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="password"
        placeholder="Password"
        required
      />
      <div className="login-form-forgot-password">
        <p className="login-form-forgot-password-p">Forgot Your Password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => {
              setCurrentState("Sign Up");
            }}
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => {
              setCurrentState("Login");
            }}
          >
            Login Here
          </p>
        )}
      </div>
      <button type="submit" className="login-form-button">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
