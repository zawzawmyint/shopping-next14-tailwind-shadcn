import Image from "next/image";
import React from "react";

const OrderItems = ({ bags }) => {
  console.log(bags);
  return (
    <div>
      <h3 className="my-10 font-semibold">Arrives Fri, Jul 12 - Tue, Jul 16</h3>
      <div className="w-full sm:w-[60%] my-5">
        {bags
          .map((bag, i) => (
            <div key={i}>
              <div className="relative aspect-square bg-secondary">
                <Image src={bag.thumbnail} fill alt={bag.title} />
              </div>
              <div>
                <p>{bag.title}</p>
                <p className="text-gray-500">Qty {bag.count}</p>
                <p className="text-gray-500">
                  $
                  {bag.count > 1
                    ? (bag.price * bag.count).toFixed(2)
                    : bag.price.toFixed(2)}
                </p>
              </div>
              <hr className="my-3" />
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default OrderItems;
