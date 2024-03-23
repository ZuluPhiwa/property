import React, { useContext } from "react";
import RegionDropdown from "./RegionDropdown";
import PriceRange from "../components/PriceDropdown";
import Property from "../components/PropertyDropdown";
import { RiSearchLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div
      className=" px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col
     lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-10 lg:shadow-lg
      bg-white  rounded-lg"
    >
      <RegionDropdown />
      <PriceRange />
      <Property />
      <button
        onClick={() => handleClick()}
        className=" bg-blue-500 p-4 w-full flex lg:max-w-[162px] justify-center items-center rounded-md text-black"
      >
        <RiSearchLine />
      </button>
    </div>
  );
};

export default Search;
