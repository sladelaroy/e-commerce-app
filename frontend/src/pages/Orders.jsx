import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from '../components/Title'
import '../styles/Orders.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const Orders = () => {
  const {backendUrl, token, currency} = useContext(ShopContext) 
  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + "/api/order/userorders", {}, {headers: {token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
            setorderData(allOrdersItem.reverse())
          })
        })
        console.log(response.data)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.messsage)
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='orders-div'>
      <div className='orders-title'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='orders-product-div'> 
              <div className='orders-product'>
                <img className='orders-product-img' src={item.image[0]} />
                <div>
                  <p className='orders-product-name'>
                    {item.name}
                  </p>
                  <div className='orders-product-info'>
                    <p className='orders-product-price'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='orders-product-date'>Date: <span className='orders-product-date-string'>{new Date(item.date).toDateString()}</span></p>
                  <p className='orders-product-date'>Payment Method: <span className='orders-product-date-string'>{item.paymentMethod}</span></p>
                </div>
              </div>

              <div className='orders-product-shipping'>
                <div className='orders-product-ready-to-ship-div'>
                  <p className='orders-product-ready-to-ship-green'></p>
                  <p className='orders-product-ready-to-ship-p'>{item.status}</p>
                </div>
                <button className='orders-product-track-button'>Track My Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
