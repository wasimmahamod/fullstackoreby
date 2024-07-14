import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { userLoginInfo } from "../../slices/userSlice";

const Sidebar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [categroydrop, setCategoryDrop] = useState(false);
  let [userdrop, setUserdrop] = useState(false);
  let [proudctdrop, setProductdrop] = useState(false);
  let userData = useSelector((state) => state.userInfo.value);

  let handleLogout = () => {
    dispatch(userLoginInfo(""));
    localStorage.setItem("userInfo", "");
    navigate("/admin/login");
  };
  return (
    <div>
      <aside
        className="relative bg-red-500 top-0 left-0 z-40 w-64  lg:h-screen "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className=" flex gap-3 items-center">
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className=" text-white text-xl font-bold ">Dashboard</span>
          </div>
          <div className=" my-10 ">
            <h1 className=" text-white text-xl font-bold ">
              Username : {userData.name}
            </h1>
            <h3 className=" text-white text-lg font-normal mt-3 ">
              Role : {userData.role}
            </h3>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() => setUserdrop(!userdrop)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <FaUserAlt />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Users
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={
                  userdrop ? " py-2 space-y-2" : " hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to="/admin/alluser"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All User
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/updateuser"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update User
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setProductdrop(!proudctdrop)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Proudcts
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={
                  proudctdrop ? " py-2 space-y-2" : " hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to="/admin/allproduct"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/addproduct"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Proudct
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Edit/Delete Product
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setCategoryDrop(!categroydrop)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <BiSolidCategory />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Category
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={
                  categroydrop ? " py-2 space-y-2" : " hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to="/admin/allcategory"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/addcategory"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/updatecategory"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update Category
                  </Link>
                </li>
              </ul>
            </li>
            <li className="w-full absolute bottom-5 left-0 ">
              <button
                onClick={handleLogout}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <IoMdLogOut className=" text-2xl" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
