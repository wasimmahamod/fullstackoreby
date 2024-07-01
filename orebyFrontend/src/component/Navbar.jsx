import React, { useEffect, useState } from "react";
import Image from "./Image";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  let [menu, setMenu] = useState(true);
  let handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function navbarMenu(e) {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navbarMenu();
    window.addEventListener("resize", navbarMenu);
  }, []);
  return (
    <nav className="bg-white py-8  relative z-50 ">
      <Container>
        <Flex className=" justify-between items-center">
          <Image src="images/logo.png" alt="logo" />
          {menu ? (
            <IoCloseSharp
              onClick={handleMenu}
              className="lg:hidden absolute top-7 right-4"
            />
          ) : (
            <FaBars
              onClick={handleMenu}
              className="lg:hidden absolute top-7 right-4"
            />
          )}

          {menu && (
            <List className="w-full lg:w-auto  absolute top-14 left-0 gap-10 pl-5  bg-secandary lg:bg-transparent lg:static   lg:flex ">
              <ListItem className="mt-5 ">
                <Link className="text-white text-sm lg:text-secandary font-normal lg:hover:text-primary  hover:font-bold duration-100 ">
                  Home
                </Link>
              </ListItem>
              <ListItem className="mt-5 ">
                <Link
                  to="/products"
                  className="text-white text-sm lg:text-secandary font-normal lg:hover:text-primary  hover:font-bold duration-100"
                >
                  Products
                </Link>
              </ListItem>
              <ListItem className="mt-5 ">
                <Link className="text-white text-sm lg:text-secandary font-normal lg:hover:text-primary  hover:font-bold duration-100">
                  About
                </Link>
              </ListItem>
              <ListItem className="mt-5 ">
                <Link className="text-white text-sm lg:text-secandary font-normal lg:hover:text-primary  hover:font-bold duration-100">
                  Contacts
                </Link>
              </ListItem>
              <ListItem className="mt-5 ">
                <Link className="text-white text-sm lg:text-secandary font-normal lg:hover:text-primary  hover:font-bold duration-100">
                  Journal
                </Link>
              </ListItem>
            </List>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
