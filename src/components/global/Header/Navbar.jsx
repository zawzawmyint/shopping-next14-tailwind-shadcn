"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { MobileSheet } from "./Menu/MobileSheet";
import NavItems from "./Menu/NavItems";
import FavoriteIcon from "./favs/FavoriteIcon";
import { SearchBar } from "./searchBar/SearchBar";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div
      className={`p-3 py-5 sm:py-3 ${
        pathName === "/men" || pathName === "/women" ? "" : "sticky"
      } top-0 bg-background z-40`}
    >
      <nav className="flex justify-between items-center max-w-[1450px] mx-auto">
        <Link href={"/"}>
          <p className="text-lg font-semibold">Llam👟</p>
        </Link>
        <div className="hidden sm:block">
          <NavItems />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <Suspense fallback={<div></div>}>
            <SearchBar />
          </Suspense>
          <FavoriteIcon />
          <ShoppingBag />
          <div className="sm:hidden">
            <MobileSheet />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
