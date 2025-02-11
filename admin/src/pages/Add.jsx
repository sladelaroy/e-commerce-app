import React, { useState } from "react";
import { assets } from "../assets/assets";
import "../styles/Add.css";
import axios from "axios";
import { backendUrl } from "../App.jsx";
import { toast } from "react-toastify";
const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );
      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setName("");
        setDescription("");
        setPrice("");
        setBestseller(false)
        // setSizes([])
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="upload-form">
      <div>
        <p className="upload-image-title">Upload Image</p>
        <div className="upload-area-div">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage3(e.target.files[0]);
              }}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage4(e.target.files[0]);
              }}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="upload-product-image-div">
        <p className="upload-product-image-p">Product Name</p>
        <input
          className="upload-product-image-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here"
        />
      </div>
      <div className="upload-product-image-div">
        <p className="upload-product-image-p">Product Description</p>
        <textarea
          className="upload-product-image-input"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Write Content Here"
        />
      </div>
      <div className="upload-select-options-div">
        <div>
          <p>Product Category</p>
          <select
            className="upload-select-category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p>Sub Category</p>
          <select
            className="upload-select-category"
            onChange={(e) => {
              setSubCategory(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input
            className="upload-enter-price-input"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            placeholder="12"
          />
        </div>
      </div>
      <div>
        <p>Product Sizes</p>
        <div className="upload-product-sizes-div">
          <div
            onClick={() => {
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((size) => size !== "S")
                  : [...prev, "S"]
              );
            }}
          >
            <p
              className={`${
                sizes.includes("S") ? "upload-product-sizes-div-active" : ""
              }  upload-product-sizes-div-p`}
            >
              S
            </p>
          </div>
          <div
            onClick={() => {
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((size) => size !== "M")
                  : [...prev, "M"]
              );
            }}
          >
            <p
              className={`${
                sizes.includes("M") ? "upload-product-sizes-div-active" : ""
              }  upload-product-sizes-div-p`}
            >
              M
            </p>
          </div>
          <div
            onClick={() => {
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((size) => size !== "L")
                  : [...prev, "L"]
              );
            }}
          >
            <p
              className={`${
                sizes.includes("L") ? "upload-product-sizes-div-active" : ""
              }  upload-product-sizes-div-p`}
            >
              L
            </p>
          </div>
          <div
            onClick={() => {
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((size) => size !== "XL")
                  : [...prev, "XL"]
              );
            }}
          >
            <p
              className={`${
                sizes.includes("XL") ? "upload-product-sizes-div-active" : ""
              }  upload-product-sizes-div-p`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() => {
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((size) => size !== "XXL")
                  : [...prev, "XXL"]
              );
            }}
          >
            <p
              className={`${
                sizes.includes("XXL") ? "upload-product-sizes-div-active" : ""
              }  upload-product-sizes-div-p`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>

      <div className="upload-product-bestseller-div">
        <input
          onChange={(e) => {
            setBestseller((prev) => !prev);
          }}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button className="add-button">ADD</button>
    </form>
  );
};

export default Add;
