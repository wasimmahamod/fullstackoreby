import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import List from "./List";
import Input from "./Input";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import Image from "./Image";
import { IoCloseSharp } from "react-icons/io5";
import { RiTriangleFill } from "react-icons/ri";
import { VscTriangleUp } from "react-icons/vsc";

const Header = () => {
  let [categoryModal, setCategoryModal] = useState(false);
  let [userModal, setUserModal] = useState(false);
  let [cartModal, setcartModal] = useState(false);

  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoryRef.current.contains(e.target)) {
        setCategoryModal(!categoryModal);
      } else {
        setCategoryModal(false);
      }
      if (userRef.current.contains(e.target)) {
        setUserModal(true);
      } else {
        setUserModal(false);
      }
      if (cartRef.current.contains(e.target)) {
        setcartModal(true);
      } else {
        setcartModal(false);
      }
    });
  }, [categoryModal]);

  return (
    <header className=" bg-headerbg py-6">
      <Container>
        <Flex className=" justify-between items-center gap-2 lg:gap-0">
          <Flex dref={categoryRef} className="items-center gap-4 relative">
            <FaBarsStaggered />
            <p className=" hidden lg:block text-sm font-normal text-primary select-none">
              Shop by Category
            </p>
            <div>
              {categoryModal && (
                <List className=" absolute z-50 top-10 left-0  w-[263px] bg-primary ">
                  <ListItem className="border-[#2D2D2D]  border-b ">
                    <Link className=" text-sm font-normal text-white py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-200   ">
                      Accesories
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D]  border-b ">
                    <Link className=" text-sm font-normal text-white py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-200  ">
                      Furniture
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D]  border-b ">
                    <Link className=" text-sm font-normal text-white py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-200  ">
                      Electronics
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D]  border-b ">
                    <Link className=" text-sm font-normal text-white py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-200  ">
                      Clothes
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D]  border-b ">
                    <Link className=" text-sm font-normal text-white py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-200  ">
                      Bags
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D]  border-b ">
                    <Link className=" text-sm font-normal text-white py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-200  ">
                      Home appliances
                    </Link>
                  </ListItem>
                </List>
              )}
            </div>
          </Flex>
          <div className=" relative w-[601px]">
            <Input
              className="w-full h-[50px] rounded-none bg-white placeholder:text-sm lg:placeholder:text-base placeholder:text-[0px] lg:placeholder:block  placeholder:pl-5"
              placeholder="Search Products"
            />
            <IoSearchSharp className=" absolute top-4 right-4 text-2xl" />
          </div>
          <div>
            <Flex className=" gap-5 lg:gap-10 relative">
              <Flex dref={userRef}>
                <div>
                  <FaUser />
                  {userModal && (
                    <div className="w-[200px] z-50 shadow-lg absolute  top-10 right-14">
                      <Link className=" block  font-bold text-white py-4 bg-primary hover:bg-white hover:text-primary  text-center duration-300 border-b border-solid border-[#2D2D2D]">
                        My Account
                      </Link>
                      <Link className=" block  font-bold text-white py-4 bg-primary hover:bg-white hover:text-primary  text-center duration-300">
                        Log Out
                      </Link>
                    </div>
                  )}
                </div>
                {userModal ? <VscTriangleDown /> : <VscTriangleUp />}
              </Flex>
              <div ref={cartRef}>
                <FaShoppingCart />
                {cartModal && (
                  <div className="w-[360px] z-50 absolute top-10 right-0  bg-headerbg shadow-sm  ">
                    <div className=" p-5">
                      <Flex className=" items-center justify-between gap-5">
                        <Image src="images/cartImage.png" />

                        <div>
                          <h3 className=" text-sm font-bold">
                            Black Smart Watch
                          </h3>
                          <h4 className=" text-sm font-bold mt-3">$44.00</h4>
                        </div>
                        <IoCloseSharp />
                      </Flex>
                    </div>
                    <div className=" bg-white p-3 ">
                      <h2 className=" font-normal text-base text-primary my-[14px]">
                        Subtotal: <span className=" font-bold">$44.00</span>
                      </h2>
                      <Link className=" font-bold text-sm font-primary py-4 px-10 border border-solid border-secandary inline-block  hover:bg-primary hover:text-white  duration-300">
                        View Cart
                      </Link>
                      <Link className=" font-bold text-sm font-primary py-4 px-10 border border-solid border-secandary inline-block  ml-5 hover:bg-primary hover:text-white  duration-300">
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
