import MainBanner from "@/components/banner-sections/MainBanner";
import HeroSection from "@/components/hero-sections/HeroSection";
import NavPage from "@/components/nav-page/NavPage";
import BannerLoading from "@/components/skeleton-fallback/BannerLoading";

import { Suspense } from "react";

const womenImages1 = ["/women/women1.jpg", "/women/women2.jpg"];
const womenMessages1 = {
  title: "DON'T WASTE YOUR ENERGY",
  desc: "Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam",
  category: "womens-shoes",
};

const navPage = {
  text: "Women",
  categories: [
    { name: "Shoes", category: "womens-shoes" },
    { name: "Clothing", category: "womens-dresses" },
    { name: "Bags", category: "womens-bags" },
  ],
};
export default function Page() {
  return (
    <div>
      <NavPage data={navPage} />
      <HeroSection images={womenImages1} message={womenMessages1} />
      <Suspense key={"banner-running-essential"} fallback={<BannerLoading />}>
        <MainBanner category={"womens-shoes"} bannerTitle="Find your beauty" />
      </Suspense>
    </div>
  );
}
