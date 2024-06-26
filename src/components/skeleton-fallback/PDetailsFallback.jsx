import React from "react";
import DetailsWrapper from "../generic/detailsWrapper/DetailsWrapper";
import { Skeleton } from "../ui/skeleton";

const PDetailsFallback = () => {
  return (
    <DetailsWrapper>
      <div className="flex flex-col sm:flex-row gap-2 ">
        <div className="basis-1/2">
          <Skeleton className={"aspect-square"} />
        </div>
        <div className="basis-1/2">
          <Skeleton className={"aspect-square"} />
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default PDetailsFallback;
