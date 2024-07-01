import React, { useEffect } from "react";
import Banner from "../component/Banner";
import Information from "../component/Information";
import Offer from "../component/Offer";
import NewArrivals from "../component/NewArrivals";
import Bestsellers from "../component/Bestsellers";
import OftheYear from "../component/OftheYear";
import SpecialOffers from "../component/SpecialOffers";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Banner />
      <Information />
      <Offer />
      <NewArrivals />
      <Bestsellers />
      <OftheYear />
      <SpecialOffers />
    </div>
  );
};

export default Home;
