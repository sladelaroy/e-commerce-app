import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'
import '../styles/RelatedProducts.css'
import ProductItem from './ProductItem'

const RelatedProducts = ({category, subCategory}) => {
  const {products} = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()

      productsCopy = productsCopy.filter((item) => category === item.category)
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

      setRelated(productsCopy.slice(0, 5))
    }
  }, [products])
  return (
    <>
     <div className='related-products-div'>
      <div className='related-products-title'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='related-products-item'>
        {
          related.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
     </div> 
    </>
  )
}

export default RelatedProducts
