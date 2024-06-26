import Image from "next/image";
import React from "react";
import { CarouselPDetails } from "./CarouselPDetails";

const PDetailsPhoto = ({ images }) => {
  return (
    <div className="basis-1/2">
      <CarouselPDetails items={images} />
    </div>
  );
};

export default PDetailsPhoto;
