import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AccordionBox({ data = [], details = false }) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full sm:w-[75%] ">
        {data.map((data, i) => (
          <AccordionItem key={data.title + i} value={`item-${i}`}>
            <AccordionTrigger>
              <h4 className="font-semibold ">
                {data.title}({data.items?.length})
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              {data.items.map((item, i) => (
                <div key={i}>
                  {details ? (
                    <div>{item}</div>
                  ) : (
                    <h6 className="my-3 text-foreground text-sm text-gray-500 font-semibold">
                      <Link href={item.path}>{item.name}</Link>
                    </h6>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
