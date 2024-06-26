import React, { Suspense } from "react";
import CategoryLink from "../s/CategoryBtn";

const NavPage = ({ data }) => {
  return (
    <div className=" p-2 py-4 my-3 flex flex-col sm:flex-row justify-start items-start sm:justify-between sm:items-center gap-2 sticky top-0 bg-background z-40">
      <h3 className="font-semibold text-2xl">{data.text}</h3>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {data.categories.map((p, i) => (
          <div key={p.name + i}>
            <Suspense fallback={<div></div>}>
              <CategoryLink category={p.category}>
                <p className="font-semibold">{p.name}</p>
              </CategoryLink>
            </Suspense>
          </div>
        ))}
      </div>
      <div className="w-20"></div>
    </div>
  );
};

export default NavPage;
