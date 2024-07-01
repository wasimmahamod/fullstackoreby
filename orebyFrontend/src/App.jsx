import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Rootlayout from "./component/layout/Rootlayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import Admin from "./admin/Admin";
import Forgetpassword from "./pages/Forgetpassword";
import Changepassword from "./pages/Changepassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home title="Home" />}></Route>
        <Route path="/products" element={<Products title="Shop" />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
        <Route
          path="/changepassword/:token"
          element={<Changepassword />}
        ></Route>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="login" element={<AdminLogin />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
