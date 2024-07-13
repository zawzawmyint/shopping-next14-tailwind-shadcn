"use client";
import CategoryLink from "@/components/s/CategoryBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { firstLetterUppercase } from "@/utils/helper";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";
const terms = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];
export function SearchBar() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);
    params.delete("cat");
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`/s/?${params.toString()}`);
  }, 500);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <SearchIcon className="cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="max-w-7xl mx-auto">
          <SheetHeader>
            <SheetTitle>Llam👟</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <Input
              type="search"
              placeholder="Search"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={
                (searchParams?.get("cat") &&
                  searchParams?.get("cat")?.toString()) ||
                (searchParams?.get("query") &&
                  searchParams?.get("query")?.toString())
              }
            />
          </div>
          <SheetDescription>Popular Search Terms.</SheetDescription>
          <ScrollArea className="h-52 w-full my-3 py-3">
            {terms.map((term, i) => (
              <div key={i + term} className="p-2 cursor-pointer">
                <Suspense>
                  <CategoryLink category={term}>
                    {firstLetterUppercase(term)}
                  </CategoryLink>
                </Suspense>
              </div>
            ))}
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
