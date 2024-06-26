import { getProductsByQuery } from "@/endpoints/searchEndpoints";
import { wait } from "@/utils/helper";
import React from "react";
import ItemCard from "../banner-sections/ItemCard";
import Link from "next/link";

const SearchResults = async ({ query, cat }) => {
  const results = await getProductsByQuery(query, cat);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {results.products.map((item, i) => (
        <Link key={i} href={`/products/${item.id}/${item.category}`}>
          <ItemCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
