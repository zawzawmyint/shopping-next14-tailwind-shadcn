"use client";
import React from "react";
import { Button } from "../ui/button";

const PDetailsButtons = () => {
  const addToCard = (p) => {
    console.log("addToCard", p);
  };
  return (
    <div>
      <ButtonBtn text={"Add to Card"} handleClick={addToCard} />
      <ButtonBtn
        variant={"secondary"}
        text={"Favorite"}
        handleClick={addToCard}
      />
    </div>
  );
};

export default PDetailsButtons;

const ButtonBtn = ({ variant = "", text, handleClick }) => {
  return (
    <Button
      onClick={() => handleClick(2)}
      variant={variant}
      className="w-full sm:w-[75%] h-14 my-2 rounded-3xl"
    >
      {text}
    </Button>
  );
};
