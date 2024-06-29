import { Button } from "@/components/ui/button";
import {
  addTobags,
  deleteFromBags,
  removeFrombags,
} from "@/lib/features/bags/bagsSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Heart, Trash2Icon } from "lucide-react";
import CounterItemBtn from "./CounterItemBtn";

const ItemButtons = ({ item, favs = false }) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();
  const favIndex = favorites.findIndex((fav) => fav.id === item.id);
  return (
    <div>
      {favs ? (
        <Button
          onClick={() => dispatch(addTobags(item))}
          className="sm:mt-8"
          variant="secondary"
        >
          Add to Bag
        </Button>
      ) : (
        <div>
          <CounterItemBtn item={item} />
          <div className="sm:mt-10">
            <Button variant="ghost" size="icon">
              {favIndex == -1 ? (
                <Heart onClick={() => dispatch(addToFavorites(item))} />
              ) : (
                <Heart
                  color="red"
                  onClick={() => dispatch(removeFromFavorites(item.id))}
                />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2Icon onClick={() => dispatch(deleteFromBags(item.id))} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemButtons;
