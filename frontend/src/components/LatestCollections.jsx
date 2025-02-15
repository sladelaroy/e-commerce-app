import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext.jsx'
import '../styles/LatestCollections.css'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem.jsx'

const LatestCollections = () => {
  const {products} = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])


  console.log(latestProducts)

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])

  return (
    <>
      <div className='latest-collections'>
        <div className='latest-collections-cont'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className='latest-collections-cont-p'>Explore fresh styles, bold designs, and timeless fashion. Our latest collection blends comfort, elegance, and trend-forward details for every occasion.</p>
        </div>
        {/* Rendering Products */}

        <div className='products-grid'>
          {
            latestProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default LatestCollections
