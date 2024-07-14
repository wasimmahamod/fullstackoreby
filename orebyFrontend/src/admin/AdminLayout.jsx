import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Flex from "../component/Flex";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  let navigate = useNavigate();
  let userData = useSelector((state) => state.userInfo.value);

  useEffect(() => {
    if (!userData) {
      navigate("/admin/login");
    }
  }, []);
  return (
    <Flex className=" sm:flex-col lg:flex-row gap-5">
      <Sidebar />
      <Outlet />
    </Flex>
  );
};

export default AdminLayout;
