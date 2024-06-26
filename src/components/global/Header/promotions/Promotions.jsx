"use client";
import React from "react";
import { CarouselPromos } from "./CarouselPromos";
import { usePathname } from "next/navigation";
// import db from "_data/db.json";

const db = {
  promotions: [
    {
      title: "Enjoy 10% Off",
      descriptions:
        "Shop 2 items or more on your first Nike App order. Download Now",
    },
    {
      title: "New Styles on Sale: Up to 40% Off",
      descriptions: "Shop All Our New Markdowns",
    },
    {
      title: "Move, Shop, Customise & Celebrate With Us.",
      descriptions:
        "No matter what you feel like doing today, It’s better as a Member. Join Us",
    },
    {
      title: "Free Delivery",
      descriptions: "Applies to orders of $7,500 or more. View details",
    },
  ],
};

const Promotions = () => {
  const pathName = usePathname();
  return (
    <div
      className={`w-full bg-secondary p-5 ${
        pathName === "/men" || (pathName === "/women") | (pathName === "/")
          ? ""
          : "hidden"
      }`}
    >
      <CarouselPromos items={db.promotions} />
    </div>
  );
};

export default Promotions;
