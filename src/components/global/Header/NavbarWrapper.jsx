"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { MobileSheet } from "./Menu/MobileSheet";
import NavItems from "./Menu/NavItems";
import BagIcon from "./bag/BagIcon";
import FavoriteIcon from "./favs/FavoriteIcon";
import { SearchBar } from "./searchBar/SearchBar";

const Navbarwrapper = ({ children }) => {
  const pathName = usePathname();

  return (
    <div
      className={`p-3 py-5 sm:py-3 ${
        pathName === "/men" || pathName === "/women" ? "" : "sticky"
      } top-0 bg-background z-40`}
    >
      {children}
    </div>
  );
};

export default Navbarwrapper;
