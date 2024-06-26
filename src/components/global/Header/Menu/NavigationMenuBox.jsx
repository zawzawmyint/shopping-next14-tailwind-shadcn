"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import CategoryLink from "@/components/s/CategoryBtn";
import { Suspense } from "react";

export function NavigationMenuBox({ path, name, category, className = "" }) {
  return (
    <NavigationMenu className="p-0">
      <NavigationMenuList>
        <NavigationMenuItem>
          {path ? (
            <Link href={path} legacyBehavior passHref>
              <p
                className={`p-2 mr-2 cursor-pointer hover:underline underline-offset-4 ${className}`}
              >
                {name}
              </p>
            </Link>
          ) : (
            <Suspense fallback={<div></div>}>
              <CategoryLink category={category}>
                {
                  <p
                    className={`p-2 mr-2 cursor-pointer hover:underline underline-offset-4 ${className}`}
                  >
                    {name}
                  </p>
                }
              </CategoryLink>
            </Suspense>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
