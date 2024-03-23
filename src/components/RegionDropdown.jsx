import React, { useState, useEffect, useContext } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const RegionDropdown = () => {
  const { region, setRegion, regions } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className=" dropdown-icon" />
        <div>
          <div className=" text-[15px] font-medium leading-tight">{region}</div>
          <div className="text-[13px]">Select region</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className=" dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className=" dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {regions.map((region, index) => {
          return (
            <Menu.Item
              onClick={() => setRegion(region)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {region}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default RegionDropdown;
