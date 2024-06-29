import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavoriteIcon = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  return (
    <Link href={"/favs"}>
      <div className="flex flex-wrap gap-2">
        <Button variant="ghost" size="icon">
          <Heart />
        </Button>{" "}
        {favorites?.length ? favorites.length : ""}
      </div>
    </Link>
  );
};

export default FavoriteIcon;
