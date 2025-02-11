import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext';
import '../styles/Product.css'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    console.log(products)
    products.map((item) => {
      if (item._id === productId) {
        console.log(item)
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
    console.log(productData);
    
  }

  useEffect(() => {
    fetchProductData()
  }, [products, productId])

  
  return productData ? ( 
    <div className='product-div'>
      <div className='product-data'>
        <div className='product-images-div'>
          <div className='product-images'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => {setImage(item)}} src={item} key={index} className='product-image' />
              ))
            }
          </div>
          <div className='product-main-image-div'>
            <img className='product-main-image' src={image} />
          </div>
  
        </div>
        <div className='product-info-div'>
            <h1 className='product-data-name'>{productData.name}
            </h1>
            <div className='product-rating-div'>
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_dull_icon} alt="" />
              <p>(122)</p>
            </div>
            <p className='product-price'>{currency}{productData.price}</p>
            <p className='product-description'>{productData.description}</p>
            <div className='product-select-options'>
              <p>Select Size</p>
              <div className='product-select-sizes'>
                {productData.sizes.map((item, index) => (
                  <button onClick={() => {setSize(item)}} key={index} className={`product-sizes ${item === size ? 'product-size-highlight' : ''}`}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={() => {addToCart(productData._id, size)}} className='product-add-to-cart'>ADD TO CART</button>
            <hr className='add-to-cart-hr' />
            <div className='product-gurantees'>
              <p>100% Original Product</p>
              <p>Cash on delivery is available on thus product</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
      </div>

      <div className='product-description-reviews'>
        <div>
          <b className='product-description-reviews-b'>Descriptions</b>
          <p className='product-description-reviews-p'>Reviews(122)</p>
        </div>
        <div className='product-full-description'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis cumque rem sint fuga, sed eum obcaecati adipisci ut temporibus recusandae ipsa doloribus consequuntur, ipsam ratione nostrum minus soluta? Voluptate!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eligendi. Ab debitis ipsum facilis doloremque temporibus, voluptatibus impedit nam, tenetur nostrum magni aliquam quaerat? Voluptatem ipsum vel voluptatibus incidunt minima.</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
     
  ) : 
    <div className='product-loading'>

    </div>
}

export default Product
