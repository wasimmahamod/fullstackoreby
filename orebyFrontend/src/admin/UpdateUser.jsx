import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";

const UpdateUser = () => {
  let [allUser, setAllUser] = useState([]);
  let [updateName, setUpdateName] = useState("");
  let [updateEmail, setUpdateEmail] = useState("");
  let [updateNameModal, setUpdateNameModal] = useState(false);

  function Alluser() {
    axios.get("http://localhost:3000/api/v1/auth/alluser").then((data) => {
      setAllUser(data.data);
    });
  }
  useEffect(() => {
    Alluser();
  }, [allUser]);

  let handleNameModal = (email) => {
    setUpdateNameModal(true);
    setUpdateEmail(email);
  };

  let handleUpdateName = () => {
    axios
      .post("http://localhost:3000/api/v1/auth/updateuser", {
        email: updateEmail,
        name: updateName,
      })
      .then(() => {
        setUpdateNameModal(false);
      });
  };

  let handleRoleChange = (cvalue, item) => {
    axios
      .post("http://localhost:3000/api/v1/auth/updateuser", {
        email: item.email,
        role: cvalue.target.value,
      })
      .then(() => {
        setUpdateNameModal(false);
      });
  };
  return (
    <div className="w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  text-gray-400">
          <thead className="text-xs  uppercase  bg-gray-700  text-gray-400">
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
              <th scope="col" className="px-6 py-3 text-xl">
                Edit Role
              </th>
            </tr>
          </thead>
          {allUser.map((item) => (
            <tbody className="w-full">
              <tr className="w-full odd:bg-white odd: even:bg-gray-50 even: bg-gray-800 border-b  border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center  gap-3 "
                >
                  {item.name}{" "}
                  <span>
                    <FaUserEdit
                      onClick={() => handleNameModal(item.email)}
                      className="text-2xl "
                    />
                  </span>
                </th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.role} </td>
                <td className="px-6 py-4">
                  <select
                    onChange={(e) => handleRoleChange(e, item)}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 "
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="merchent">Merchent</option>
                  </select>
                </td>
              </tr>
            </tbody>
          ))}
          {updateNameModal && (
            <div>
              <div className=" z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4  left-2/4 translate-x-[50%] w-full max-w-md max-h-full">
                  {/* Modal content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {" "}
                        Update Your Name
                      </h3>
                      <button
                        onClick={() => setUpdateNameModal(false)}
                        type="button"
                        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="authentication-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5">
                      <div>
                        <input
                          onChange={(e) => setUpdateName(e.target.value)}
                          type="text"
                          placeholder="update your name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required=""
                        />
                      </div>

                      <button
                        onClick={handleUpdateName}
                        type="submit"
                        className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default UpdateUser;
