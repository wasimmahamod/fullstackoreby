import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Image from "./Image";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3] py-[55px] mt-[150px]">
      <Container>
        <Flex className=" flex-col lg:flex-row">
          <Flex className="gap-10 lg:gap-[120px]  flex-wrap">
            <List>
              <h3 className="text-base font-bold text-primary mb-4">MENU</h3>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 ">
                <Link>Home</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Shop</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>About</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Contact</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Journal</Link>
              </ListItem>
            </List>
            <List>
              <h3 className="text-base font-bold text-primary mb-4">SHOP</h3>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 ">
                <Link>Category 1</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Category 2</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Category 3</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Category 4</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Category 5</Link>
              </ListItem>
            </List>
            <List>
              <h3 className="text-base font-bold text-primary mb-4">HELP</h3>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 ">
                <Link>Privacy Policy</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Terms & Conditions</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Special E-shop</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Shipping</Link>
              </ListItem>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 mt-[6px]">
                <Link>Secure Payments</Link>
              </ListItem>
            </List>
            <List>
              <h3 className="text-base font-bold text-primary mb-4 w-[186px]">
                (052) 611-5711 company@domain.com
              </h3>
              <ListItem className="text-sm font-normal text-secendary  hover:text-primary hover:text-primaay duration-300 ">
                <Link>575 Crescent Ave. Quakertown, PA 18951</Link>
              </ListItem>
            </List>
          </Flex>
          <div className="lg:ml-[256px] mt-10 lg:mt-0">
            <Image src="images/logo.png" alt="logoimge" />
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
