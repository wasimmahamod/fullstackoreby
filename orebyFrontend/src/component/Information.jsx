import React from "react";
import { RiNumber2 } from "react-icons/ri";
import Container from "./Container";
import Flex from "./Flex";
import { MdLocalShipping } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Information = () => {
  return (
    <section className=" py-5  border-y border-1 border-[#F0F0F0]">
      <Container>
        <Flex className=" justify-between">
          <Flex className="gap-4 items-center">
            <RiNumber2 className=" text-xl hidden sm:block" />
            <p className=" text-base text-[#6D6D6D] font-normal ">
              Two years warranty
            </p>
          </Flex>
          <Flex className="gap-4 items-center">
            <MdLocalShipping className=" text-xl hidden sm:block" />
            <p className=" text-base text-[#6D6D6D] font-normal ">
              Free shipping
            </p>
          </Flex>
          <Flex className="gap-4 items-center">
            <FaArrowRotateLeft className=" text-xl hidden sm:block" />
            <p className=" text-base text-[#6D6D6D] font-normal ">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Information;
