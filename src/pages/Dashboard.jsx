import React from "react";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Location from "../components/Location";
import Information from "../components/Information";
import GridCategory from "../components/grid/GridCategory";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <div className="container text-black">
        {/* <CategorySlider /> */}
        <GridCategory />
        <Gallery />
        <Information />
        {/* <AutoSlider /> */}
        <Location />
      </div>
    </>
  );
};

export default Dashboard;
