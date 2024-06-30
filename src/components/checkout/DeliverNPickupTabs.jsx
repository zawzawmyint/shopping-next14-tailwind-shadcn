import { LocateIcon, Package2Icon } from "lucide-react";

const DeliverNPickupTabs = ({ tabIndex = 0, setTabIndex }) => {
  return (
    <div>
      <div
        className={`flex items-center gap-2 border-2 rounded-sm p-5 w-full sm:w-[70%] cursor-pointer ${
          tabIndex === 0 ? "border-black" : ""
        }`}
        onClick={() => setTabIndex(0)}
      >
        <Package2Icon /> <p>Deliver It</p>
      </div>
      <div
        className={`flex items-center gap-2 border-2 rounded-sm p-5 w-full sm:w-[70%] cursor-pointer mt-5 ${
          tabIndex === 1 ? "border-black" : ""
        }`}
        onClick={() => setTabIndex(1)}
      >
        <LocateIcon /> <p>Pick It Up</p>
      </div>
    </div>
  );
};

export default DeliverNPickupTabs;
