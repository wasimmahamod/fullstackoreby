import React, { useState } from "react";
import Container from "../component/Container";
import Image from "../component/Image";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Changepassword = () => {
  let { token } = useParams();
  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  let handleChangePassword = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/api/v1/auth/changepassword",
        {
          email,
          newpassword: password,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((data) => {
        console.log(data);
        setSuccess("Password changed");
        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image src="images/logo.png" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Change Your password
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    New Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Enter Your new password"
                    required=""
                  />
                </div>
                {success && (
                  <div
                    className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                    role="alert"
                  >
                    <div className="flex">
                      <div className="py-1">
                        <svg
                          className="fill-current h-6 w-6 text-teal-500 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold">{success}</p>
                      </div>
                    </div>
                  </div>
                )}
                {error && (
                  <div role="alert">
                    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                      Danger
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="ml-3 text-sm"></div>
                  </div>
                </div>
                <button
                  onClick={handleChangePassword}
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Changepassword;
