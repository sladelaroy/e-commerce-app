import { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { Link } from 'react-router-dom'
import '../styles/ProductItem.css'

const ProductItem = ({id, image, name, price}) => {
  const {currency} = useContext(ShopContext)

  
  return (
    <>
      <Link className='product-item' to={`/product/${id}`}>
        <div className='img-container'>
          <img src={image[0]} />
        </div>
        <p className='name'>{name}</p>
        <p className='currency-price'>{currency}{price}</p>
      </Link>
    </>
  )

}
export default ProductItem
