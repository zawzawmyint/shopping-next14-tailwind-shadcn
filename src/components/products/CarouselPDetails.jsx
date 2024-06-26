"use client";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import BannerTitle from "../banner-sections/BannerTitle";

export function CarouselPDetails({ items }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 9000,
        }),
      ]}
      className="w-full relative"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="relative aspect-square">
            <Image
              src={item}
              alt="details-image"
              fill
              className="rounded bg-secondary"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute  left-5 " />
      <CarouselNext className="absolute  right-5 " />
    </Carousel>
  );
}
