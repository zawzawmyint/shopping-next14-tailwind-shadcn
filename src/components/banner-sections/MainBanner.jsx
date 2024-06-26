import React from "react";
import { CarouselBanner } from "./CarouselBanner";
import { wait } from "@/utils/helper";
import { getProductsByCategory } from "@/endpoints/categoryEndpoints";

const MainBanner = async ({ category, bannerTitle }) => {
  const tops = await getProductsByCategory(category);
  await wait();

  return (
    <div>
      <CarouselBanner items={tops.products} bannerTitle={bannerTitle} />
    </div>
  );
};

export default MainBanner;
