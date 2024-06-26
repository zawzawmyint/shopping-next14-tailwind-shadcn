import { wait } from "@/utils/helper";

export async function getProductsByCategory(category = "") {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=9`
  );
  // await wait();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
