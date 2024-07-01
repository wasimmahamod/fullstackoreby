import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import Breadcrumb from "../component/Breadcrumb";
import Flex from "../component/Flex";
import ShopbyCategory from "../component/ShopbyCategory";
import ShopbyColor from "../component/ShopbyColor";
import { FaListUl } from "react-icons/fa6";
import Product from "../component/Product";
import axios from "axios";
import Pagination from "../component/Pagination";

const Products = ({ title }) => {
  let [perpage, setParPage] = useState(6);
  let [products, setProudcts] = useState([]);
  useEffect(() => {
    function getProducts() {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProudcts(data.data.products);
      });
    }

    getProducts();
  }, []);

  let handlePerPage = (e) => {
    setParPage(parseInt(e.target.value));
  };

  return (
    <div>
      <Container>
        <Breadcrumb title={title} />

        <Flex className=" flex-col md:flex-row gap-10 mt-[50px] lg:mt-[100px]">
          <div className="w-full md:w-[20%] ">
            <ShopbyCategory />
            <ShopbyColor />
          </div>
          <div className="w-full md:w-[80%] ">
            <div className="w-full flex flex-wrap  justify-between ">
              <div>
                <div className=" bg-primary p-3 text-white  inline-block  hover:bg-white hover:text-primary hover:border hover:border-primary border border-transparent">
                  <FaListUl />
                </div>
                <div className=" bg-primary p-3 text-white  inline-block  hover:bg-white hover:text-primary hover:border hover:border-primary border border-transparent  ml-5">
                  <FaListUl />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-4 md:gap-10">
                  <div className=" flex items-center gap-3 ">
                    <label
                      htmlFor="countries"
                      className="block  text-sm font-medium text-gray-900  whitespace-nowrap "
                    >
                      Sort by:
                    </label>
                    <select
                      id="countries"
                      className="w-[239px] bg-gray-50 border border-gray-300 text-gray-900 text-sm   block  p-2.5"
                    >
                      <option selected="">Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className=" flex items-center gap-3 ">
                    <label
                      htmlFor="countries"
                      className="block  text-sm font-medium text-gray-900  whitespace-nowrap "
                    >
                      Show::
                    </label>
                    <select
                      onChange={handlePerPage}
                      id="countries"
                      className="w-[139px] bg-gray-50 border border-gray-300 text-gray-900 text-sm   block  p-2.5"
                    >
                      <option value={6} selected>
                        6
                      </option>
                      <option value={12}>12</option>
                      <option value={18}>18</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* ====================products start  =============  */}
            <section className=" mt-16">
              <Pagination itemsPerPage={perpage} proudcts={products} />
            </section>
            {/* ====================products end  =============  */}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Products;
