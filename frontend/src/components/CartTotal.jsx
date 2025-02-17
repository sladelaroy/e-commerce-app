import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import '../styles/CartTotal.css'
import Title from './Title'

const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)

  return (
    <>
      <div className='cart-total-div'>
        <div className='cart-total-title'>
          <Title text1={'CART'} text2={'TOTAL'} />
        </div>

        <div className='cart-total-amount'>
          <div className='cart-total-amount-inner-div'>
            <p>Subtotal</p>
            <p>{currency} {getCartAmount()}.00</p>
          </div>
          
          <div className='cart-total-amount-inner-div'>
            <p>Shipping Fee</p>
            <p>{currency} {getCartAmount() ? delivery_fee : 0}.00</p>
          </div>
          <hr />
          <div className='cart-total-amount-inner-div'>
            <b>Total</b>
            <b>{currency} {getCartAmount() === '0' ? '0' : getCartAmount() + delivery_fee}.00</b>
          </div>
          
        </div>
      </div>    
    </>
  )
}

export default CartTotal
