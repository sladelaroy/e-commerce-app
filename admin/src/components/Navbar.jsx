import React from 'react'
import {assets} from '../assets/assets.js'
import '../styles/Navbar.css'

const Navbar = ({setToken}) => {
  return (
    <div className='navbar-div'>
      <img className='navbar-logo' src={assets.logo} alt="" />
      <button onClick={() => setToken('')} className='navbar-logout-button'>Logout</button>
    </div>
  )
}

export default Navbar
