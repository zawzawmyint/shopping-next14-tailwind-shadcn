import { getProductDetails } from "@/endpoints/productDetailsEndpoints";
import DetailsWrapper from "../generic/detailsWrapper/DetailsWrapper";
import { AccordionBox } from "../generic/footer/AccordionBox";
import PDetailsButtons from "./PDetailsButtons";
import PDetailsHeader from "./PDetailsHeader";
import PDetailsPhoto from "./PDetailsPhoto";
import PDetailsReview from "./PDetailsReviews";
import { ScrollArea } from "../ui/scroll-area";
import { wait } from "@/utils/helper";

const ProductDetails = async ({ id }) => {
  const product = await getProductDetails(id);
  // console.log(product);
  const reviews = product.reviews.map((review, i) => (
    <PDetailsReview key={i} review={review} />
  ));

  return (
    <DetailsWrapper>
      <div className="flex flex-col sm:flex-row gap-2 ">
        <div className="container sm:hidden">
          <PDetailsHeader data={product} />
        </div>
        <PDetailsPhoto images={product.images} />
        <div className=" basis-1/2 ">
          <ScrollArea className="h-[560px]">
            <div className="container sm:ml-[10%] my-2 flex flex-col gap-3">
              <div className="hidden sm:block">
                <PDetailsHeader data={product} />
              </div>
              <div>
                <PDetailsButtons data={product} />
              </div>
              <div className="rounded bg-secondary w-full sm:w-[75%] p-3 ">
                This product is made with at least 20% recycled content by
                weight
              </div>
              <div className=" w-full sm:w-[75%] mt-2 ">
                {product.description}
              </div>
              <div>
                <AccordionBox
                  data={[{ title: "Review", items: reviews }]}
                  details
                />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default ProductDetails;
