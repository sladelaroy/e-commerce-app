import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import "../styles/Cart.css";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);
  return (
    <div className="cart-div">
      <div className="cart-title">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div key={index} className="cart-item-div">
              <div className="cart-item">
                <img className="cart-item-img" src={productData.image[0]} />
                <div>
                  <p className="cart-item-p">{productData.name}</p>
                  <div className="cart-item-price">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="cart-item-size">{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="cart-item-input"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => {
                  updateQuantity(item._id, item.size, 0);
                }}
                className="cart-item-bin"
                src={assets.bin_icon}
              />
            </div>
          );
        })}
      </div>
      <div className="cart-item-cart-total">
        <div className="cart-item-cart-total-inner-div">
          <CartTotal />
          <div className="cart-item-cart-total-checkout">
            <button
              onClick={() => {
                navigate("/place-order");
              }}
              className="cart-item-cart-total-button"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
