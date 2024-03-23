import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const House = ({ house }) => {
  const { image, type, region, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card shadow-2xl transition w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-blue-500 my-4  line-clamp-2"
        >
          E {price}
        </CardItem>
        <div className="flex space-x-4 items-center ">
          <div className="flex items-center gap-1 text-gray-600">
            <div>
              <BiBed size={20} />
            </div>
            <div>{bedrooms}</div>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <div>
              <BiBath size={20} />
            </div>
            <div>{bathrooms}</div>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <div>
              <BiArea size={20} />
            </div>
            <div>{surface}</div>
          </div>
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-md max-w-sm mt-2 line-clamp-2 text-ellipsis "
        >
          {address}
        </CardItem>
        <div className="flex space-x-4 items-center mt-8">
          <CardItem
            translateZ={20}
            as="p"
            className="px-4 py-2 rounded-xl bg-black dark:bg-green-500 dark:text-white text-white text-xs font-bold"
          >
            <p>{region}</p>
          </CardItem>
          <CardItem
            translateZ={20}
            as="p"
            className="px-4 py-2 rounded-xl bg-black dark:bg-blue-500 dark:text-white text-white text-xs font-bold"
          >
            <p>{type}</p>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default House;
