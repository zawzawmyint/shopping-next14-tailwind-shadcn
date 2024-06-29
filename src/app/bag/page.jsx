import Bag from "@/components/bag/Bag";
import PDetailsFallback from "@/components/skeleton-fallback/PDetailsFallback";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense key={"bag"} fallback={<PDetailsFallback bag />}>
        <Bag />
      </Suspense>
    </div>
  );
};

export default Page;
