import { getProductsByQuery } from "@/endpoints/searchEndpoints";
import { firstLetterUppercase } from "@/utils/helper";
import { Button } from "../ui/button";

const SHeader = async ({ query, cat }) => {
  const results = await getProductsByQuery(query, cat);

  return (
    <div className="flex flex-wrap justify-between items-center gap-2 p-2 py-4 my-2">
      <h3 className="font-semibold text-2xl">
        {query
          ? firstLetterUppercase(query)
          : cat
          ? firstLetterUppercase(cat)
          : "ALL"}
        ({results?.products?.length || 0})
      </h3>
      <div>
        {/* <Button variant="secondary" className="rounded-md">
          Filter
        </Button> */}
      </div>
    </div>
  );
};

export default SHeader;
