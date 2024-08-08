import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Addproduct = () => {
  const [value, setValue] = useState("");
  console.log(value);
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
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5"
            placeholder="Category Name"
            required=""
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium "
          >
            Product Description
          </label>
          <textarea
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 h-[300px] "
            placeholder="Category Description"
            required=""
          />
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <button
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
