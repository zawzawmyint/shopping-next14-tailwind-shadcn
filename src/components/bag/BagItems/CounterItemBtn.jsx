import { Button } from "@/components/ui/button";
import { addTobags, removeFrombags } from "@/lib/features/bags/bagsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const CounterItemBtn = ({ item }) => {
  const dispatch = useAppDispatch();

  // for item count
  const bags = useAppSelector((state) => state.bags.bags);
  const index = bags.findIndex((bag) => bag.id === item.id);

  return (
    <div
      className={`flex my-2 flex-wrap items-center gap-3 ${
        index == -1 ? "hidden" : ""
      }`}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={() => dispatch(removeFrombags(item.id))}
      >
        -
      </Button>
      <p className="p-1 px-3 border-2">
        {index != -1 ? bags[index]?.count : 0}
      </p>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => dispatch(addTobags(item))}
      >
        +
      </Button>
    </div>
  );
};

export default CounterItemBtn;
