import Favorites from "@/components/favs/Favorites";
import BannerLoading from "@/components/skeleton-fallback/BannerLoading";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <div className="my-7 p-2">
        <h3 className="font-semibold text-2xl">Favorites</h3>
      </div>
      <Suspense key={"favorites"} fallback={<BannerLoading />}>
        <Favorites />
      </Suspense>
    </div>
  );
};

export default Page;
