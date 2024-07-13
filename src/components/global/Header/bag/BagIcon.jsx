"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const BagIcon = () => {
  const bags = useAppSelector((state) => state.bags.bags);

  const counts = bags.map((bag) => bag.count);

  const total = counts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <Link href={"/bag"}>
      <div className="flex flex-wrap gap-2">
        <Button variant="ghost" size="icon">
          <ShoppingBag />
        </Button>
        {total || ""}
      </div>
    </Link>
  );
};

export default BagIcon;
