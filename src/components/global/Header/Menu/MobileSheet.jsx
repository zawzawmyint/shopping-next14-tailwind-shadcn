import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import NavItems from "./NavItems";
import SubMenu from "./SubMenu";

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant={"ghost"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            <Link href={"/"}>Llam👟</Link>
          </SheetTitle>
          <SheetDescription>Enjoy Shopping!</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <NavItems />
        </div>
        <div className="flex flex-col items-start justify-center  gap-10 mt-5">
          <p className="font-bold text-xl">Shopy</p>
          <div>
            <p>
              Become a Llam member for best products, inspiration and stories in
              sport. Learn more
            </p>
            <div className="flex gap-2 flex-wrap">
              <Button size="sm" variant="secondary">
                Join Us
              </Button>
              <Button size="sm">Sign In</Button>
            </div>
          </div>
          <div>
            <SubMenu />
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
