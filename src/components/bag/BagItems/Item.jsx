import Image from "next/image";
import { useRouter } from "next/navigation";
import ItemButtons from "./ItemButtons";

const Item = ({ item, favs = false }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-wrap">
        <div
          className="basis-2/5 sm:basis-1/4 relative aspect-square  bg-secondary cursor-pointer"
          onClick={() => router.push(`/products/${item.id}/${item.category}`)}
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="rounded"
          />
        </div>
        <div className="basis-3/5 sm:basis-3/4 px-2 flex flex-col gap-2 relative">
          <div className="flex justify-between items-center font-semibold">
            <p>{item.title}</p>
            <p>
              $
              {item.count > 1
                ? (item.price * item.count).toFixed(2)
                : item.price.toFixed(2)}
            </p>
          </div>
          <p>{item.brand}</p>
          <ItemButtons item={item} favs={favs} />
        </div>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default Item;
