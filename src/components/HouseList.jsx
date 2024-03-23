import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-4xl text-blue-500 mt-[200px]" />
    );
  }
  if (houses.length < 1) {
    return (
      <div className=" text-center text-4xl font-bold mt-28">
        Sorry No houses found
      </div>
    );
  }
  return (
    <section className="mb-12">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-x-3 gap-y-2">
          {houses.map((house, index) => {
            return <House house={house} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
