import Image from "next/image";
import React from "react";
import MotionDiv from "../generic/motion/MotionDiv";
import { calculateRates } from "@/utils/helper";

const ItemCard = ({ item, banner = false }) => {
  return (
    <div className="mb-10">
      <MotionDiv>
        <div className=" aspect-square relative bg-secondary">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className=" hover:scale-105 transition-all duration-500"
          />
        </div>
      </MotionDiv>

      <div className="pl-5 sm:pl-3 mt-2">
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm tracking-tight text-gray-500">
          {banner && item.description}
        </p>
        {!banner && (
          <p className="text-sm tracking-tight text-gray-500">
            {item?.category}
          </p>
        )}

        {!banner && (
          <p className="text-sm tracking-tight text-gray-500">
            ⭐ {calculateRates(item?.rating)}%
          </p>
        )}
        <p className=" font-semibold mt-2"> ${item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
