import Link from "next/link";
import { Suspense } from "react";
import { MobileSheet } from "./Menu/MobileSheet";
import NavItems from "./Menu/NavItems";
import Navbarwrapper from "./NavbarWrapper";
import BagIcon from "./bag/BagIcon";
import FavoriteIcon from "./favs/FavoriteIcon";
import { SearchBar } from "./searchBar/SearchBar";

const Navbar = () => {
  return (
    <Navbarwrapper>
      <nav className="flex justify-between items-center max-w-[1450px] mx-auto">
        <Link href={"/"}>
          <p className="text-lg font-semibold">Llam👟</p>
        </Link>
        <div className="hidden sm:block">
          <NavItems />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Suspense fallback={<div></div>}>
            <SearchBar />
          </Suspense>
          <FavoriteIcon />
          <BagIcon />
          <div className="sm:hidden">
            <MobileSheet />
          </div>
        </div>
      </nav>
    </Navbarwrapper>
  );
};

export default Navbar;
