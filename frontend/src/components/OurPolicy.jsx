import React from 'react'
import '../styles/OurPolicy.css'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <>
      <div className='our-policy-div'>
        <div>
          <img src={assets.exchange_icon} className='our-policy-img' />
          <p className='our-policy-title'>Easy Exchange Policy</p>
          <p className='our-policy-text'>We offer hassle-free policy</p>
        </div>

        <div>
          <img src={assets.quality_icon} className='our-policy-img' />
          <p className='our-policy-title'>7 Days return policy</p>
          <p className='our-policy-text'>We provide 7 days free return policy</p>
        </div>

        <div>
          <img src={assets.support_img} className='our-policy-img' />
          <p className='our-policy-title'>Best customer support</p>
          <p className='our-policy-text'>We provide 24/7 customer support</p>
        </div>
        
      </div>
    </>
  )
}

export default OurPolicy
