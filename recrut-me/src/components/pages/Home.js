import React from "react";
import Find from "../find/Find";
import Features from "../features/Features";
import Compagnies from "../compagnies/Compagnies";
import Process from "../process/Process";
import Sponsors from "../sponsors/Sponsors";

const Home = () => {
  return (
    <div>
      <Find />
      <Features />
      <Process />
      <Compagnies />
      <Sponsors />
    </div>
  );
};

export default Home;
