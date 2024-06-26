import Link from "next/link";
import SubMenu from "./Menu/SubMenu";

const SubNav = () => {
  return (
    <div className="bg-secondary p-1 hidden sm:block">
      <nav className="flex justify-between items-center max-w-[1450px] mx-auto">
        <Link href={"/"}>
          <p className="text-sm font-bold">Shopy</p>
        </Link>
        <SubMenu />
      </nav>
    </div>
  );
};

export default SubNav;
