import { Separator } from "@/components/ui/separator";
import { NavigationMenuBox } from "./NavigationMenuBox";
import { auth } from "../../../../../auth";
import { LogOutIcon, User2Icon } from "lucide-react";

const SubMenu = async () => {
  const session = await auth();

  const items = [
    { name: "Find a store", path: "/" },
    { name: "Help", path: "/" },
    { name: "Join", path: "/" },
    {
      name: !session?.user ? "Sign In" : <User2Icon size={16} />,
      path: !session?.user ? "/sign-in" : "/sign-out",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      {items.map((item, i) => (
        <div key={item.name + i} className="text-sm font-semibold flex ">
          <NavigationMenuBox
            path={item.path}
            name={item.name}
            className={"text-xs font-semibold  "}
          />
          {items.length - 1 == i ? (
            ""
          ) : (
            <Separator orientation="vertical" className="hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
