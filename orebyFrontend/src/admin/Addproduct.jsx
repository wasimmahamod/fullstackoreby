import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useSelector } from "react-redux";

const Addproduct = () => {
  let data = useSelector((state) => state.userInfo.value);

  const [name, setName] = useState("");
  const [descrption, setDescription] = useState("");

  let [imageUrl, setImageUrl] = useState(null);
  let [sellingprice, setSellingprice] = useState(null);
  let [price, setprice] = useState(null);
  let [category, setCategory] = useState("");
  let [allCategory, setAllCategory] = useState([]);
  let [allStore, setAllStore] = useState([]);
  let [store, setStore] = useState(null);

  let handlesubmit = () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", descrption);
    formData.append("image", imageUrl);
    formData.append("sellingprice", sellingprice);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("storeid", store);
    formData.append("ownerId", data._id);

    axios
      .post("http://localhost:3000/api/v1/product/createproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    function getCategory() {
      axios
        .get("http://localhost:3000/api/v1/category/allcategory")
        .then((data) => {
          setAllCategory(data.data.category);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCategory();
    function getStore() {
      axios
        .get("http://localhost:3000/api/v1/store/allstore")
        .then((data) => {
          setAllStore(data.data.allstore);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStore();
  }, []);
  return (
    <div>
      <div>
        <h2 className=" text-2xl font-bold font-dmSens mt-3">
          Create Product{" "}
        </h2>
        <div className=" mt-10">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium "
          >
            Product Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5"
            placeholder="Product Name"
            required=""
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium  mt-5">
            Product Description
          </label>
          <ReactQuill
            theme="snow"
            value={descrption}
            onChange={setDescription}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium  mt-5">
            Product Image
          </label>
          <input
            onChange={(e) => setImageUrl(e.target.files[0])}
            className="block mt-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
            id="file_input"
            type="file"
          />
          {imageUrl && (
            <img
              className="w-[200px] h-[100px] mt-2 object-cover"
              src={URL.createObjectURL(imageUrl)}
              alt=""
            />
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium  mt-5">
            Product Category
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border py-2 px-5"
          >
            {allCategory.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium  mt-5">Store</label>
          <select
            onChange={(e) => setStore(e.target.value)}
            className="w-full border py-2 px-5"
          >
            {allStore.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className=" flex">
          <div>
            <label className="block mb-2 text-sm font-medium  mt-5">
              Product Selling Price
            </label>
            <input
              onChange={(e) => setSellingprice(e.target.value)}
              className=" border border-gray-500 px-3 py-2"
              type="number"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium  mt-5">
              Product Price
            </label>
            <input
              onChange={(e) => setprice(e.target.value)}
              className=" border border-gray-500 px-3 py-2"
              type="number"
            />
          </div>
        </div>
        <button
          onClick={handlesubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Addproduct;
