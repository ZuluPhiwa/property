import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import image1 from "../assets/img/houses/house1lg.png";
import image2 from "../assets/img/houses/house2lg.png";
import image3 from "../assets/img/houses/house3lg.png";
import image4 from "../assets/img/houses/house4lg.png";

const Sticky = () => {
  const content = [
    {
      title: "Find your perfect house",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat repudiandae error libero consectetur cumque blanditiis cupiditate iure enim earum, sit, officia veritatis vero velit vel accusantium architecto voluptas magnam.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={image1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Or your apartment",
      description:
        "Enjoy your own space and peace in this 3 bedroom, 1 bath, 1 lounge, 1 dining room, 1 separate toilet, 1 kitchen and carport in the West part of Mbabane, Zone 2.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={image2}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "More houses",
      description:
        "This 3 Bedroom 2 Bathroom Full-Title House in a 24-Hour Security Estate situated in Mpolonjeni , Mbabane, East of Nkoyoyo, spacious, it is ideally located closer to major routes, schools and shopping centres such as Mams mall.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={image3}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "We have 5 plans to choose from 40m2 up to 71m2, If you are looking for a home look no further this estate caters for families, young couple, young individuals and newlyweds.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={image4}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <div className=" mt-1 md:mt-24">
      <StickyScroll content={content} />
    </div>
  );
};

export default Sticky;
