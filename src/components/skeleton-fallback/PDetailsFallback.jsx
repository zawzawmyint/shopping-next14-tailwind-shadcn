import React from "react";
import DetailsWrapper from "../generic/detailsWrapper/DetailsWrapper";
import { Skeleton } from "../ui/skeleton";

const PDetailsFallback = ({ bag = false }) => {
  return (
    <DetailsWrapper>
      <div className="flex flex-col sm:flex-row gap-2 ">
        <div className={`${bag ? "basis-2/3" : "basis-1/2"}`}>
          <Skeleton className={"aspect-square"} />
        </div>
        <div className={`${bag ? "basis-1/3" : "basis-1/2"}`}>
          <Skeleton className={"aspect-square"} />
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default PDetailsFallback;
