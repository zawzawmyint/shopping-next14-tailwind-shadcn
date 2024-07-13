import MainBanner from "@/components/banner-sections/MainBanner";
import HeroSection from "@/components/hero-sections/HeroSection";
import NavPage from "@/components/nav-page/NavPage";
import BannerLoading from "@/components/skeleton-fallback/BannerLoading";

import { Suspense } from "react";

const heroImages1 = ["/men/men1.jpg", "/men/men2.jpg"];
const heroMessages1 = {
  title: "DON'T WASTE YOUR ENERGY",
  desc: "Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam",
  category: "mens-shoes",
};

const navPage = {
  text: "Men",
  categories: [
    { name: "Shoes", category: "mens-shoes" },
    { name: "Clothing", category: "mens-shirts" },
    { name: "Watches", category: "mens-watches" },
  ],
};
export default function Page() {
  return (
    <div>
      <NavPage data={navPage} />
      <HeroSection images={heroImages1} message={heroMessages1} />
      <Suspense key={"banner-running-essential"} fallback={<BannerLoading />}>
        <MainBanner category={"mens-shoes"} bannerTitle="Running Essentials" />
      </Suspense>
    </div>
  );
}
