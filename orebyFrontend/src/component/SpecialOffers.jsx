import React from "react";
import Title from "./Title";
import Flex from "./Flex";
import Product from "./Product";
import Container from "./Container";

const SpecialOffers = () => {
  return (
    <section className="mt-[128px] ">
      <Container>
        <Title className="mb-12" headding="Special Offers" />
        <Flex className=" justify-between flex-wrap xl:flex-nowrap">
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={false} />
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={false} />
        </Flex>
      </Container>
    </section>
  );
};

export default SpecialOffers;
