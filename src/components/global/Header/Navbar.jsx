"use client";
import { Heart, SearchIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSheet } from "./Menu/MobileSheet";
import NavItems from "./Menu/NavItems";
import { SearchBar } from "./searchBar/SearchBar";
import { Suspense } from "react";

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
          <Suspense key={"search-bar"} fallback={<div></div>}>
            <SearchBar />
          </Suspense>
          <Heart />
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