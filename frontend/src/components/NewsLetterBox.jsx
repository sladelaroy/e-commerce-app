import React from 'react'
import '../styles/NewsLetterBox.css'

const NewsLetterBox = () => {

  const onSubmitHandler = () => {
    
  }
  return (
    <>
      <div className='newsletter-div'>
        <p className='newsletter-title-one'>Subscribe now and get 20% off</p>
        <p className='newsletter-title-two'>Lorem ipsim hskk  ujsdkkjka  jskdkjkdkjakjd hakdlksdlkd</p>

        <form onSubmit={onSubmitHandler} className='newsletter-form'>
          <input className='newsletter-input' type='email' placeholder='Enter your email' />
          <button type='submit' className='newsletter-input-button'>SUBSCRIBE</button>
        </form>
      </div>
    </>
  )
}

export default NewsLetterBox
