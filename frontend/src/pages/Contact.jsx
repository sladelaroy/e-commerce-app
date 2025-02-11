import React from 'react'
import '../styles/Contact.css'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='contact-div'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='contact-img-div'>
        <img className='contact-img' src={assets.contact_img} alt="" />
        <div className='contact-details-div'>
          <p className='contact-details-text'>Our Store</p>
          <p className='contact-details-p'>53674 Willms Station <br /> Suite 453 Washington</p>
          <p className='contact-details-p'>Tel: (417) 555-0122 <br /> Email: funshofaleye@gmail.com</p>
          <p className='contact-details-text'>Careers At Forever</p>
          <p className='contact-details-p'>Learn more about our teams and job openings</p>
          <button className='contact-details-button'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
