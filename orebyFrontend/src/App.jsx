import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./component/layout/Rootlayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import Admin from "./admin/Admin";
import Forgetpassword from "./pages/Forgetpassword";
import Changepassword from "./pages/Changepassword";
import Alluser from "./admin/Alluser";
import UpdateUser from "./admin/UpdateUser";
import Addproduct from "./admin/Addproduct";
import Allproduct from "./admin/Allproduct";
import UpdateProduct from "./admin/UpdateProduct";
import Allcategory from "./admin/Allcategory";
import AddCategory from "./admin/AddCategory";
import UpdateCategory from "./admin/UpdateCategory";
import ProductsDetails from "./pages/ProductsDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/success" element={<PaymentSuccess />}></Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home title="Home" />}></Route>
        <Route path="/products" element={<Products title="Shop" />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
        <Route path="/productdetails/:id" element={<ProductsDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/changepassword/:token"
          element={<Changepassword />}
        ></Route>
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="alluser" element={<Alluser />} />
        <Route path="updateuser" element={<UpdateUser />} />
        <Route path="allproduct" element={<Allproduct />} />
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="updateproduct" element={<UpdateProduct />} />
        <Route path="allcategory" element={<Allcategory />} />
        <Route path="addcategory" element={<AddCategory />} />
        <Route path="updatecategory" element={<UpdateCategory />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
