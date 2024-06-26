import React from "react";
import { Skeleton } from "../ui/skeleton";

const SHeaderLoading = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-2 p-3 py-4 my-2">
      <h3 className="font-semibold text-2xl">
        <Skeleton className={"w-48 h-10"} />
      </h3>
      <div>
        <Skeleton className={"w-16 h-10"} />
      </div>
    </div>
  );
};

export default SHeaderLoading;
