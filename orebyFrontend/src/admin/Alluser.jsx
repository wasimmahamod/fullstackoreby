import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Alluser = () => {

  let [allUser, setAllUser] = useState([]);
  function Alluser() {
    axios.get("http://localhost:3000/api/v1/auth/alluser").then((data) => {
      setAllUser(data.data);
    });
  }
  useEffect(() => {
    Alluser();
  }, [allUser]);

  return (
    <div className="w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  bg-gray-700  text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-xl">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 text-xl">
                User Email
              </th>
              <th scope="col" className="px-6 py-3 text-xl">
                Role
              </th>
            </tr>
          </thead>
          {allUser.map((item) => (
            <tbody className="w-full">
              <tr className="w-full odd:bg-white odd: even:bg-gray-50 even: bg-gray-800 border-b  border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.role}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Alluser;
