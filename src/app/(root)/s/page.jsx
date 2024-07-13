import SHeader from "@/components/s/SHeader";
import SearchResults from "@/components/s/SearchResults";
import BannerLoading from "@/components/skeleton-fallback/BannerLoading";
import SHeaderLoading from "@/components/skeleton-fallback/SHeaderLoading";
import { Suspense } from "react";

const Page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const cat = searchParams?.cat || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <Suspense key={query + "sheader"} fallback={<SHeaderLoading />}>
        <SHeader query={query} cat={cat} />
      </Suspense>
      <Suspense key={query + currentPage} fallback={<BannerLoading />}>
        <SearchResults query={query} cat={cat} />
      </Suspense>
    </div>
  );
};

export default Page;
