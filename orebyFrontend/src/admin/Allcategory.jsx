import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Allcategory = () => {
  let userdata = useSelector((state) => state.userInfo.value);

  let [allcategory, setAllcategory] = useState([]);
  useEffect(() => {
    let getAllcategory = () => {
      axios
        .get("http://localhost:3000/api/v1/category/allcategory")
        .then((data) => {
          setAllcategory(data.data.category);
        });
    };
    getAllcategory();
  }, [allcategory]);

  let handleActiveChange = (avalue, item) => {
    axios
      .post("http://localhost:3000/api/v1/category/categoryapprove", {
        userEmail: userdata.email,
        email: item.email,
        isActive: avalue.target.value,
        category: item._id,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleCategoryDelete = (citem) => {
    axios
      .post("http://localhost:3000/api/v1/category/categorydelete", {
        email: userdata.email,
        category: citem._id,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-700  ">
            <tr>
              <th scope="col" className="px-6 py-3 text-xl">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3 text-xl">
                Category Description
              </th>

              <th scope="col" className="px-6 py-3 text-xl">
                Is Active
              </th>
              <th scope="col" className="px-6 py-3 text-xl">
                Active/non-active
              </th>
              <th scope="col" className="px-6 py-3 text-xl">
                Delete Category
              </th>
            </tr>
          </thead>

          <tbody className="w-full">
            {allcategory.map((item) => (
              <tr className="w-full odd:bg-white odd: even:bg-gray-50 even: bg-gray-800 border-b  border-gray-700 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.description}
                </th>

                <td className="px-6 py-4">
                  {item.isActive ? "Active" : "Pending "}
                </td>
                <td>
                  <select
                    onChange={(e) => handleActiveChange(e, item)}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 "
                  >
                    <option value="true">Active</option>
                    <option value="">Non-Active</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleCategoryDelete(item)}
                    className="bg-red-500 text-white py-3 px-4 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allcategory;
