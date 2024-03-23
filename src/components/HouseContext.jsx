import React, { useState, createContext, useEffect } from "react";

import { housesData } from "../components/data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [region, setRegion] = useState("Location(any)");
  const [regions, setRegions] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  //return all regions
  useEffect(() => {
    const allRegions = houses.map((house) => {
      return house.region;
    });
    //remove duplicate regions
    const uniqueRegion = ["Location (any)", ...new Set(allRegions)];
    setRegions(uniqueRegion);
  }, []);

  //return all regions
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    //remove duplicate regions
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    console.log(maxPrice);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.region === region &&
        house.type === property &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }

      if (isDefault(region) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(region) && isDefault(property) && isDefault(price)) {
        return house.region === region;
      }
      if (isDefault(region) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      if (isDefault(region) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.price === price;
        }
      }
      if (!isDefault(region) && !isDefault(property) && isDefault(price)) {
        return house.type === property && house.region === region;
      }
      if (!isDefault(region) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.region === region;
        }
      }

      if (isDefault(region) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        region,
        setRegion,
        regions,
        setRegions,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
