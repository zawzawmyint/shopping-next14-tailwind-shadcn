import { Separator } from "@/components/ui/separator";
import { NavigationMenuBox } from "./NavigationMenuBox";

const items = [
  { name: "Find a store", path: "/" },
  { name: "Help", path: "/" },
  { name: "Join", path: "/" },
  { name: "Sign In", path: "/" },
];
const SubMenu = () => {
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
