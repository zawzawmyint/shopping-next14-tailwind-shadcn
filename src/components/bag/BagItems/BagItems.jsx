"use client";
import { useAppSelector } from "@/lib/hooks";
import Item from "./Item";

const BagItems = () => {
  const bagItems = useAppSelector((state) => state.bags.bags);

  return (
    <div className="">
      {bagItems.length !== 0 &&
        bagItems.map((item, i) => <Item key={item} item={item} />).reverse()}
      {bagItems.length === 0 && <div>No Bag Items</div>}
    </div>
  );
};

export default BagItems;
