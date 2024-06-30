"use client";
import { useAppSelector } from "@/lib/hooks";
import { calculateRates } from "@/utils/helper";
import React from "react";

const PDetailsHeader = ({ data }) => {
  // for total price
  const bags = useAppSelector((state) => state.bags.bags);
  const index = bags.findIndex((bag) => bag.id === data.id);
  return (
    <div>
      <h5 className="text-destructive font-semibold">Sustainable Materials</h5>
      <h3 className="text-2xl font-semibold">{data.title}</h3>
      <h5 className=" font-semibold">{data.brand}</h5>
      <h5 className=" font-semibold text-sm">
        Ratings: ⭐ {calculateRates(data?.rating)}%{" "}
      </h5>
      <h5 className="font-semibold my-2">
        $
        {index != -1
          ? (bags[index]?.count * data?.price).toFixed(2)
          : data?.price.toFixed(2)}
      </h5>
    </div>
  );
};

export default PDetailsHeader;
