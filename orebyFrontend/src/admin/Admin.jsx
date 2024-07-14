import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let navigate = useNavigate();
  let data = useSelector((state) => state.userInfo.value);

  useEffect(() => {
    if (!data) {
      navigate("/admin/login");
    }
  }, []);

  return <div>Admin</div>;
};

export default Admin;
