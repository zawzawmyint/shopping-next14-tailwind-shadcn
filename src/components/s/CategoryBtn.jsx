"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

const CategoryLink = ({ category, children }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function createCatURL(cat) {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    if (cat) {
      params.set("cat", cat);
    } else {
      params.delete("cat");
    }
    replace(`/s/?${params.toString()}`);
  }
  return (
    <div className="cursor-pointer" onClick={() => createCatURL(category)}>
      {children}
    </div>
  );
};

export default CategoryLink;
