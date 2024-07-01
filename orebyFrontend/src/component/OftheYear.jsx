import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";

const OftheYear = () => {
  return (
    <section className="mt-[130px] ">
      <Container>
        <Link>
          <Image src="images/phoneoftheYear.png" alt="phoneoftheYear" />
        </Link>
      </Container>
    </section>
  );
};

export default OftheYear;
