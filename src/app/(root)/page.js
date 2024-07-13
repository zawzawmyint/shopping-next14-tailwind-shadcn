import BannerTitle from "@/components/banner-sections/BannerTitle";
import MainBanner from "@/components/banner-sections/MainBanner";
import HeroSection from "@/components/hero-sections/HeroSection";
import BannerLoading from "@/components/skeleton-fallback/BannerLoading";
import { Suspense } from "react";
const heroImages1 = ["/home/home1.jpg", "/home/home2.jpg"];
const heroMessages1 = {
  title: "DON'T WASTE YOUR ENERGY",
  desc: "Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.",
  category: "mens-shoes",
};
const heroImages2 = ["/home/nb1.jpg", "/home/nb2.jpg"];
const heroMessages2 = {
  title: "New Balance 530",
  desc: "New Balance Athletic Inc (New Balance) manufactures, markets and sells shoes, apparels and accessories for men, women and children.",
  category: "mens-shoes",
};
export default function Home() {
  return (
    <div>
      <HeroSection images={heroImages1} message={heroMessages1} />
      <Suspense key={"mens-shoes"} fallback={<BannerLoading />}>
        <MainBanner
          category={heroMessages1.category}
          bannerTitle="Men's shoes"
        />
      </Suspense>
      <div className="m-2 mb-4">
        <BannerTitle title={"Don't Miss"} />
      </div>
      <HeroSection images={heroImages2} message={heroMessages2} />
      <Suspense key={"womens-shoes"} fallback={<BannerLoading />}>
        <MainBanner category={"womens-shoes"} bannerTitle="Women's shoes" />
      </Suspense>
    </div>
  );
}
