import { useEffect, useState } from "react";
import { useContext } from "react";
import Title from "./Title.jsx";
import { ShopContext } from "../contexts/ShopContext";
import "../styles/BestSeller.css";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  const fetchBestProducts = () => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
    console.log(products);
  };
  useEffect(() => {
    if (products.length > 0) {
      fetchBestProducts();
    }
  }, [products]);
  return (
    <>
      <div className="bestseller-div">
        <div className="inner-div">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="inner-p">
          Top-rated picks loved by our customers! Shop bestsellers featuring premium quality, stylish designs, and unbeatable comfort for every occasion.
          </p>
        </div>
        <div className="products-grid">
          {bestSeller.map((item, index) => {
            console.log("working");
            return (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
