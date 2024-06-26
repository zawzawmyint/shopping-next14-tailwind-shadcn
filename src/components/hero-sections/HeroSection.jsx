import Image from "next/image";
import React from "react";
import HeroHeaderAndDesc from "./HeroHeaderAndDesc";
import CategoryLink from "../s/CategoryBtn";

const HeroSection = ({ images, message }) => {
  return (
    <CategoryLink category={message.category}>
      <div className="flex">
        <Image
          src={images[0]}
          alt="hero1"
          width={200}
          height={200}
          className="w-full sm:basis-1/2 h-[400px] sm:h-[700px]"
        />
        <Image
          src={images[1]}
          alt="hero1"
          width={200}
          height={200}
          className="basis-1/2 hidden sm:block h-[700px]"
        />
      </div>
      <div>
        <HeroHeaderAndDesc message={message} />
      </div>
    </CategoryLink>
  );
};

export default HeroSection;
