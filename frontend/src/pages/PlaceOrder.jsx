import React, { useContext, useState } from "react";
import "../styles/PlaceOrder.css";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler =  (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      console.log(orderData)
      
      switch (method) {
        case 'cod':
          const response = await axios.post(backendUrl + "/api/order/place", orderData, {headers: {token}})
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            console.log(response.data.message)
          }
          break;
        
        case 'stripe': 
          const responseStripe = await axios.post(backendUrl + "/api/order/stripe", orderData, {headers: {token}})
          if (responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }
        default: 
          break
      }
      
    } catch (error) {}
  };

  return (
    <form onSubmit={onSubmitHandler} className="place-order-div">
      <div className="place-order-delivery-div">
        <div className="place-order-delivery-information-title">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="place-order-delivery-information">
          <input
            className="place-order-delivery-information-input"
            onChange={onChangeHandler}
            value={formData.firstName}
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="place-order-delivery-information-input"
            onChange={onChangeHandler}
            value={formData.lastName}
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="place-order-delivery-information-input"
          onChange={onChangeHandler}
          value={formData.email}
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          className="place-order-delivery-information-input"
          onChange={onChangeHandler}
          value={formData.street}
          name="street"
          type="text"
          placeholder="Street Name"
          required
        />
        <div className="place-order-delivery-information">
          <input
            className="place-order-delivery-information-input"
            onChange={onChangeHandler}
            value={formData.city}
            name="city"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="place-order-delivery-information-input"
            onChange={onChangeHandler}
            value={formData.state}
            name="state"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="place-order-delivery-information">
          <input
            className="place-order-delivery-information-input"
            onChange={onChangeHandler}
            value={formData.zipCode}
            name="zipCode"
            type="number"
            placeholder="Zip Code"
            required
          />
          <input
            className="place-order-delivery-information-input"
            onChange={onChangeHandler}
            value={formData.country}
            name="country"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          className="place-order-delivery-information-input"
          onChange={onChangeHandler}
          value={formData.phone}
          name="phone"
          type="number"
          placeholder="Phone Number"
          required
        />
      </div>

      <div className="place-order-cart-total-div">
        <div className="place-order-cart-total">
          <CartTotal />
        </div>

        <div className="place-order-payment-div">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="place-order-payment-methods-div">
            <div
              onClick={() => {
                setMethod("stripe");
              }}
              className="place-order-payment-methods"
            >
              <p
                className={`place-order-payment-methods-text ${
                  method === "stripe"
                    ? "place-order-payment-methods-text-green"
                    : ""
                }`}
              ></p>
              <img
                className="place-order-payment-methods-img"
                src={assets.stripe_logo}
              />
            </div>
            <div
              onClick={() => {
                setMethod("razorPay");
              }}
              className="place-order-payment-methods"
            >
              <p
                className={`place-order-payment-methods-text ${
                  method === "razorPay"
                    ? "place-order-payment-methods-text-green"
                    : ""
                }`}
              ></p>
              <img
                className="place-order-payment-methods-img"
                src={assets.razorpay_logo}
              />
            </div>
            <div
              onClick={() => {
                setMethod("cod");
              }}
              className="place-order-payment-methods"
            >
              <p
                className={`place-order-payment-methods-text ${
                  method === "cod"
                    ? "place-order-payment-methods-text-green"
                    : ""
                }`}
              ></p>
              <p className="place-order-payment-methods-text-cash">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="place-order-button-div">
            <button type="submit" className="place-order-button">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
