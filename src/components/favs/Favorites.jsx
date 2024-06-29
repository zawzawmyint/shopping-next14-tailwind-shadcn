"use client";
import Link from "next/link";
import React from "react";
import ItemCard from "../banner-sections/ItemCard";
import { useAppSelector } from "@/lib/hooks";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  return (
    <div>
      {favorites.length !== 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {favorites.map((item, i) => (
            <Link key={i} href={`/products/${item.id}/${item.category}`}>
              <ItemCard item={item} />
            </Link>
          ))}
        </div>
      )}
      {favorites.length === 0 && <div className="p-2">No Favorites</div>}
    </div>
  );
};

export default Favorites;
