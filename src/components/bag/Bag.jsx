import DetailsWrapper from "../generic/detailsWrapper/DetailsWrapper";
import BagHeader from "./BagHeader";
import BagItems from "./BagItems/BagItems";
import FavItems from "./FavItems/FavItems";
import Summary from "./Summary/Summary";

const Bag = () => {
  return (
    <DetailsWrapper>
      <div className="flex flex-col sm:flex-row gap-5 p-2">
        <div className="w-full sm:basis-2/3">
          <BagHeader text={"Bag"} />
          <BagItems />
        </div>
        <div className="w-full sm:basis-1/3">
          <BagHeader text={"Summary"} />
          <Summary />
        </div>
      </div>
      <div className="my-5 p-2">
        <BagHeader text={"Favorites"} />
        <FavItems />
      </div>
    </DetailsWrapper>
  );
};

export default Bag;
