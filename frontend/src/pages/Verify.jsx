import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const Verify = () => {
  const {navigate, token, setCartItems , backendUrl} = useContext(ShopContext)
  const [searchParams, setSearchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/verifyStripe', {success, orderId}, {headers: {token}})
      if (response.data.success) {
        setCartItems({})
        navigate('/orders')
      } else {
        navigate('/cart')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [token])
  return (
    <div>
      <h1>Verify</h1>
    </div>
  )
}

export default Verify
