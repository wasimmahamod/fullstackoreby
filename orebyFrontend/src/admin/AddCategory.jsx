import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let handleCreateCategory = () => {
    axios
      .post("http://localhost:3000/api/v1/category/createcategory", {
        name,
        description,
      })
      .then((data) => {
        toast.success(data.data.success, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition:Bounce
        theme="light"
      />
      <h2 className=" text-2xl font-bold font-dmSens mt-3">Create Category </h2>
      <div className=" mt-10">
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">
          Category Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5"
          placeholder="Category Name"
          required=""
        />
      </div>
      <div className="mt-3">
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">
          Category Description
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 h-[300px] "
          placeholder="Category Description"
          required=""
        />
      </div>
      <button
        onClick={handleCreateCategory}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default AddCategory;
