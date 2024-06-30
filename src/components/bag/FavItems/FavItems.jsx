"use client";
import { useAppSelector } from "@/lib/hooks";
import Item from "../BagItems/Item";
import Link from "next/link";

const FavItems = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {favorites.length !== 0 &&
          favorites
            .slice(-2)
            .reverse()
            .map((item, i) => <Item key={item} item={item} favs />)}
        {favorites.length === 0 && (
          <div>There are no items saved to your favourites.</div>
        )}
      </div>
      {favorites.length !== 0 && (
        <div className="p-2">
          <Link href={"/favs"} className="underline underline-offset-2">
            See all favorites
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavItems;
