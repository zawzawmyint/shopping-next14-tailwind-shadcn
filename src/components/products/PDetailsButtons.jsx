"use client";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "../ui/button";

const PDetailsButtons = ({ data }) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  console.log(favorites);
  const dispatch = useAppDispatch();

  const favIndex = favorites.findIndex((fav) => fav.id === data.id);
  console.log(favIndex);
  const addToCard = (p) => {
    console.log("addToCard", p);
  };
  return (
    <div>
      <ButtonBtn text={"Add to Card"} handleClick={addToCard} />
      {favIndex == -1 ? (
        <ButtonBtn
          variant={"secondary"}
          text={"Favorite "}
          handleClick={() => dispatch(addToFavorites(data))}
        />
      ) : (
        <ButtonBtn
          variant={"secondary"}
          text={"Favorite ❤️"}
          handleClick={() => dispatch(removeFromFavorites(data.id))}
        />
      )}
    </div>
  );
};

export default PDetailsButtons;

const ButtonBtn = ({ variant = "", text, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      variant={variant}
      className="w-full sm:w-[75%] h-14 my-2 rounded-3xl"
    >
      {text}
    </Button>
  );
};
