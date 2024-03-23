import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/houseanim.json";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import Sticky from "./Sticky";

const Home2 = () => {
  return (
    <div>
      <div className="p-6 bg-gray-100">
        <div className=" grid md:grid-cols-2 gap-4 mx-8 md:mx-16 my-8 md:my-16">
          <div className="my-auto">
            <h1 className=" font-extrabold text-5xl md:text-7xl">
              Find your <span className="text-blue-500">oasis</span> in a few
              clicks
            </h1>
            <h1 className="mt-5">
              Whether a house or an apartment, we've got you covered. We are
              Eswatini's largest property search portal and is the first place
              to start your property search!
            </h1>
            <button className=" p-2 my-2 border rounded-md shadow-md bg-blue-500 text-white">
              <Link to="/property/search">Search</Link>
            </button>
          </div>

          <div>
            <Lottie animationData={animationData} className=" h-full" />
          </div>
        </div>
      </div>

      <Grid />
      <Sticky />
    </div>
  );
};

export default Home2;
