import React from 'react'
import '../styles/Title.css'

const Title = ({text1, text2}) => {
  
  

  return (
    <>
      <div className='title-container'>
        <p className='title-one'>{text1} <span>{text2}</span> </p>
        <p className='title-two'></p>
      </div> 
    </>
  )
}

export default Title
