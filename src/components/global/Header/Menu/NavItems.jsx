import React from "react";
import { NavigationMenuBox } from "./NavigationMenuBox";

const NavItems = () => {
  const items = [
    { name: "Men", path: "/men", category: "" },
    { name: "Women", path: "/women", category: "" },
    { name: "Sports", path: "", category: "sports-accessories" },
    { name: "Sun Glasses", path: "", category: "sunglasses" },
    { name: "Laptops", path: "", category: "laptops" },
    { name: "Tablets", path: "", category: "tablets" },
  ];
  return (
    <div className="flex flex-col sm:flex-row flex-wrap sm:justify-center items-start sm:items-center ">
      {items.map((item, i) => (
        <div key={item.name + i} className="font-semibold  ">
          <NavigationMenuBox
            path={item.path}
            name={item.name}
            category={item.category}
            className={"text-md font-semibold  "}
          />
        </div>
      ))}
    </div>
  );
};

export default NavItems;
