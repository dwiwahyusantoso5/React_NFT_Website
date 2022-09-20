import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import CreateNft from "../pages/CreateNft";
import Contact from "../pages/Contact";
import NftDetails from "../pages/NftDetails";
import Wallet from "../pages/Wallet";
import SellerProfile from "../pages/SellerProfile";
import EditProfile from "../pages/EditProfile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create-nft" element={<CreateNft />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/nft-details" element={<NftDetails />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/seller-profile" element={<SellerProfile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
};

export default Routers;
//min 15
