import { useEffect, useState } from "react";
import { useContext } from "react"
import Title from "./Title.jsx";
import { ShopContext } from "../contexts/ShopContext";
import '../styles/BestSeller.css'
import ProductItem from "./ProductItem";


const BestSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([])
  useEffect(() => {
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(0, 5));
  },[products])
  return (
    <>
      <div className="bestseller-div">
        <div className="inner-div">
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className="inner-p">sakjkaso ujasjbkljs jkasdjkioasulkdjkl kljasdiusfbbalisk haskdjijbs usuiishsdj</p>
        </div>
        <div className='products-grid'>
          {
            bestSeller.map((item, index)=> (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default BestSeller
