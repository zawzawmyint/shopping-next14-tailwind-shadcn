"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import BannerTitle from "./BannerTitle";
import ItemCard from "./ItemCard";
import CategoryLink from "../s/CategoryBtn";
import Link from "next/link";

export function CarouselBanner({ items, bannerTitle, isCategory = false }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full px-3"
    >
      <div className="flex justify-between items-center my-5 ">
        <BannerTitle title={bannerTitle} />
        <div className="relative">
          <CarouselPrevious className="absolute top-0 -left-20 " />
          <CarouselNext className="absolute top-0 right-1 " />
        </div>
      </div>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-1 ">
            {isCategory ? (
              <CategoryLink category={item.category}></CategoryLink>
            ) : (
              <Link href={`/products/${item.id}/${item.category}`}>
                <ItemCard item={item} banner />
              </Link>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
