"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

const Summary = () => {
  const bags = useAppSelector((state) => state.bags.bags);
  const eachArray = bags.map((bag) => bag.count * bag.price);
  const subTotal = eachArray.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  return (
    <div>
      <SummaryIitem text={"Subtotal"} value={subTotal.toFixed(2)} />
      <SummaryIitem text={"Estimated Delivery & Handling"} value={"0"} />
      <hr className="my-3" />
      <SummaryIitem text={"Total"} value={subTotal.toFixed(2)} />
      <hr className="my-3" />
      <Button variant="" className="w-full h-14 my-5 rounded-3xl">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;

const SummaryIitem = ({ text, value }) => {
  return (
    <div className="flex flex-wrap justify-between items-center my-5">
      <p>{text}</p>
      <p>${value}</p>
    </div>
  );
};
