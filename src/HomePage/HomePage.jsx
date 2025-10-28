import React, { Suspense } from "react";
import Home from "../Home/Home";
import Rating from "../Rating/Rating";
import TrendingApps from "../TrendingApps/TrendingApps";

const HomePage = () => {
  return (
    <div>
      <Home></Home>
      <Rating></Rating>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default HomePage;
