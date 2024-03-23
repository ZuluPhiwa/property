import React from "react";
import banner2 from "../assets/banner2.jpg";
import banner from "../assets/banner1.jpeg";

const Grid2 = () => {
  return (
    <div className="p-6">
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div>
          <img src={banner} alt="" loading="lazy" />
        </div>
        <div class="col-start-3">
          <img src={banner2} alt="" loading="lazy" />
        </div>
        <div>
          <img src={banner2} alt="" loading="lazy" />
        </div>
        <div>
          <img src={banner} alt="" loading="lazy" />
        </div>
        <div class="row-start-1 col-start-2 col-span-2">
          <img src={banner} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Grid2;
