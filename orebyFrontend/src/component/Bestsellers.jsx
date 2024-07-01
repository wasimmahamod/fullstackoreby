import React from 'react';
import Title from './Title';
import Container from './Container';
import Flex from './Flex';
import Product from './Product';

const Bestsellers = () => {
  return (
    <section>
        <Container>
      <Title  className="mb-12" headding="Our Bestsellers" />
             <Flex className=" justify-between flex-wrap xl:flex-nowrap">
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={false} />
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={false} />
        </Flex>
        </Container>
    </section>
  );
}

export default Bestsellers;
