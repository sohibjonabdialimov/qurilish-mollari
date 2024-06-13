import React from "react";
import Carousel from "../components/Carousel";
import Location from "../components/Location";
import Information from "../components/Information";
import AutoSlider from "../components/AutoSlider";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <div className="container text-black">
        <AutoSlider />
        <Information />
        <Location />
      </div>
    </>
  );
};

export default Dashboard;
