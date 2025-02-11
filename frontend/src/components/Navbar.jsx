import { Link, NavLink, useLocation } from 'react-router-dom'
import {assets} from '../assets/assets.js'
import '../styles/Navbar.css'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext.jsx'
const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount, token, navigate, setToken, setCartItems} = useContext(ShopContext)

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({})
    navigate('/login')
  }
  
  
  
  return (
    <div className='navbarDiv'>
      <Link to='/'>
        <img src={assets.logo} />
      </Link>
      
      <ul className='listElement'>
        <NavLink to='/' className='navLink'>
          <p>HOME</p>
          <hr></hr>
        </NavLink>

        <NavLink to='/collections' className='navLink'>
          <p>COLLECTIONS</p>
          <hr></hr>
        </NavLink>
        
        <NavLink to='/about' className='navLink'>
          <p>ABOUT</p>
          <hr></hr>
        </NavLink>

        <NavLink to='/contact' className='navLink'>
          <p>CONTACT</p>
          <hr></hr>
        </NavLink>

      </ul>

      <div className='navIcons'>
        <img onClick={() =>{setShowSearch(true)}} src={assets.search_icon} className='' alt=''/>
        <div className='group'>
        <Link to={'/login'}><img src={assets.profile_icon} /></Link>
          <div className='dropdown-menu'>
            <div className='menu'>
              <p>My Profile</p>
              <p onClick={() => {navigate('/orders')}}>Orders</p>
              <p onClick={() => {logout()}}>Logout</p>
            </div>

            
          </div>  
        </div>
        <Link to='/cart' className='cart'>
          <img src={assets.cart_icon} />
          <p>{getCartCount()}</p>
        </Link>
        <img onClick={() => {setVisible(true)}} src={assets.menu_icon} className='menuIcon' />
      </div>
    {/* for small devices */}
    <div className={`sideMenu ${visible ? 'sideMenuFull' : 'sideMenuNone'}`}>
      <div>
        <div onClick={() => {setVisible(false)}}>
          <img src={assets.dropdown_icon} />
          <p>Back</p>
        </div>

        <NavLink to='/' onClick={() => {setVisible(false)}} className='sideMenuItems'>
          HOME
        </NavLink>

        <NavLink to='/collections' onClick={() => {setVisible(false)}} className='sideMenuItems'>
          COLLECTIONS
        </NavLink>
        
        <NavLink to='/about' onClick={() => {setVisible(false)}} className='sideMenuItems'>
          ABOUT
        </NavLink>

        <NavLink to='/contact' onClick={() => {setVisible(false)}} className='sideMenuItems'>
          CONTACT
        </NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar
