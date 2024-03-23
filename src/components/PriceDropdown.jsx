import React, { useState, useEffect, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "250000 - 350000",
    },
    {
      value: "350001 - 450000",
    },
    {
      value: "450001 - 550000",
    },
    {
      value: "550001 - 650000",
    },
    {
      value: "650001 - 750000",
    },
    {
      value: "750001 - 850000",
    },
    {
      value: "850001 - 1000000",
    },
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className=" dropdown-icon" />
        <div>
          <div className=" text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className=" dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className=" dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceDropdown;
