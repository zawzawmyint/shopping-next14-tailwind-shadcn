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
import { useState } from "react";

export function CarouselPDetails({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex gap-1">
      <Carousel
        orientation="vertical"
        className="w-full basis-1/6 hidden sm:block "
      >
        <CarouselContent className="aspect-square p-2">
          {items.map((item, index) => (
            <CarouselItem
              onMouseEnter={() => handleItemClick(index)}
              key={index}
              className={`relative aspect-square mt-2 ${
                selectedIndex === index ? "shadow-black shadow-sm" : ""
              }`}
            >
              <Image
                src={item}
                alt="details-image"
                fill
                className="rounded bg-secondary"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        className="w-full relative sm:basis-5/6"
        activeSlide={selectedIndex}
        onSlideChange={(index) => setSelectedIndex(index)}
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
    </div>
  );
}
