import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BagHeader from "../bag/BagHeader";
import Summary from "../bag/Summary/Summary";
import { ScrollArea } from "../ui/scroll-area";

const OrderPopover = () => {
  return (
    <div className="flex justify-between items-center">
      <BagHeader text={"Order Summary"} />
      <PopoverBox />
    </div>
  );
};

export default OrderPopover;

function PopoverBox() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Items</Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <ScrollArea className="h-[600px] ">
          <Summary isOrder />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
