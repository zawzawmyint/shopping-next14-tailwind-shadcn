import { wait } from "@/utils/helper";

export async function getProductsByQuery(query = "", cat = "") {
  let url = `https://dummyjson.com/products/search?q=${query}`;

  if (cat) {
    url = `https://dummyjson.com/products/category/${cat}`;
  }
  if (cat && query) {
    url = `https://dummyjson.com/products/category/${cat}?q=${query}`;
  }

  const res = await fetch(url);
  // await wait();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
