import MainBanner from "@/components/banner-sections/MainBanner";
import ProductDetails from "@/components/products/ProductDetails";
import BannerLoading from "@/components/skeleton-fallback/BannerLoading";
import PDetailsFallback from "@/components/skeleton-fallback/PDetailsFallback";
import { Suspense } from "react";

export default function Page({ params }) {
  const [id, category] = params.slug;
  return (
    <div>
      <Suspense key={"product-details"} fallback={<PDetailsFallback />}>
        <ProductDetails id={id} />
      </Suspense>
      <Suspense key={category} fallback={<BannerLoading />}>
        <MainBanner category={category} bannerTitle="You Might Also Like" />
      </Suspense>
    </div>
  );
}
