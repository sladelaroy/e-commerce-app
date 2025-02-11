import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import '../styles/Collection.css'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collections = () => {
  const [showFilter, setShowFilter] = useState(true)
  const {products, search, showSearch} = useContext(ShopContext)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('Relevant')

  useEffect(() => {
    setFilterProducts(products)
  }, [])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(()=>{
    sortProducts()
  }, [sortType])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy  = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default: 
        applyFilter()
        break;
          
    }
  }


  return (
    <>
      <div className='collection-div'>
        {/* filter options */}
        <div className='collection-left-div'>
          <p className='collection-filters-text' onClick={()=>{setShowFilter(!showFilter)}}>FILTERS
            <img className={`collection-dropdown ${showFilter ? '' : "collection-dropdown-showFilterTrue"}`} src={assets.dropdown_icon} />
          </p>

          {/* categories */}
          <div className={ `collection-categories ${showFilter ? '' : 'collection-categories-hidden'} `}>
            <p className='collection-categories-title'>CATEGORIES</p>
            <div className='collection-categories-elements'>
              <p>
                <input type='checkbox' value={'Men'} onChange={toggleCategory} /> Men
              </p>
              <p>
                <input type='checkbox' value={'Women'} onChange={toggleCategory} /> Women
              </p>
              <p>
                <input type='checkbox' value={'Kids'} onChange={toggleCategory}  /> Kids
              </p>
            </div>
          </div>

          {/* Subcategory filter */}
          <div className={ `collection-categories ${showFilter ? '' : 'collection-categories-hidden'} `}>
            <p className='collection-categories-title'>TYPE</p>
            <div className='collection-categories-elements'>
              <p>
                <input type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
              </p>
              <p>
                <input type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
              </p>
              <p>
                <input type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* sort options */}
        <div className='collection-right-div'>
          <div className='collection-sort-div'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product sort */}
            <select onChange={(e) => {setSortType(e.target.value)}} className='collection-select'>
              <option value="relevant">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
          </div>

            {/* Map Products */}
            <div className='collection-products'>
              {
                filterProducts.map((item, index) => (
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default Collections
