import React from "react";
import Container from "./Container";
import Image from "./Image";
import Flex from "./Flex";

const Offer = () => {
  return (
    <section className="mt-10 lg:mt-[140px] ">
      <Container>
        <Flex className=" flex-wrap lg:flex-nowrap gap-10">
          <Image src="images/Ad_1.png" alt="add_1" />
          <div className=" flex flex-col gap-10">
            <Image src="images/Ad_2.png" alt="add_2" />
            <Image src="images/Ad_3.png" alt="add_3" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Offer;
