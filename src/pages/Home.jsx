import React from "react";

import { Container } from "react-dom";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
    </>
  );
};

export default Home;
