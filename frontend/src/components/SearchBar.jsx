import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../contexts/ShopContext'

import '../styles/SearchBar.css'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
  const [visible, setVisible] = useState();
  const location = useLocation();
  

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? 
    ( 
      <div className='search-div'>
        <div className='search-cont'>
          <input value={search} onChange={(e) => {setSearch(e.target.value)}} className='search-input' type='text' placeholder='Search' />
          <img src={assets.search_icon} />
        </div>
        <img onClick={(e)=> {setShowSearch(false)}} className='search-close' src={assets.cross_icon} />
      </div>
    ) : null;
}

export default SearchBar
