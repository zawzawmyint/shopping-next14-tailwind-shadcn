import { AccordionBox } from "@/components/generic/footer/AccordionBox";
import Link from "next/link";
import React from "react";

const FooterItem = ({ data }) => {
  return (
    <div>
      <div className="hidden sm:block">
        <h4 className="font-semibold mb-7 ">{data.title}</h4>
        {data.items.map((item, i) => (
          <h6
            key={i}
            className="my-4 text-foreground text-sm text-gray-500 font-semibold"
          >
            <Link href={item.path}>{item.name}</Link>
          </h6>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
