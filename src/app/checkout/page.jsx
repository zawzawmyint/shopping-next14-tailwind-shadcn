import Checkout from "@/components/checkout/Checkout";
import PDetailsFallback from "@/components/skeleton-fallback/PDetailsFallback";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense key={"bag"} fallback={<PDetailsFallback bag />}>
      <Checkout />
    </Suspense>
  );
};

export default Page;
