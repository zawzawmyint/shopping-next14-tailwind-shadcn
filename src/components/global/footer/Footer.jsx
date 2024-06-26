import { AccordionBox } from "@/components/generic/footer/AccordionBox";
import { Separator } from "@/components/ui/separator";
import { EarthIcon } from "lucide-react";
import Link from "next/link";
import Container from "../Container";
import FooterItem from "./FooterItem";

const Footer = () => {
  const data = [
    {
      title: "Resources",
      items: [
        { name: "Find A store", path: "/" },
        { name: "Become A Member", path: "/" },
        { name: "Student Discounts", path: "/" },
        { name: "Send Us Feedback", path: "/" },
      ],
    },
    {
      title: "Help",
      items: [
        { name: "Get Help", path: "/" },
        { name: "Order Status", path: "/" },
        { name: "Delivery", path: "/" },
        { name: "Returns", path: "/" },
        { name: "Payment Options", path: "/" },
        { name: "Contact Us", path: "/" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Llam", path: "/" },
        { name: "News", path: "/" },
        { name: "Careers", path: "/" },
        { name: "Investors", path: "/" },
        { name: "Sustainability", path: "/" },
      ],
    },
  ];
  return (
    <Container>
      <Separator className={"my-10"} />
      <div className="hidden sm:block">
        <div className="grid sm:grid-cols-4 gap-2  my-3">
          {data.map((data, i) => (
            <FooterItem key={i} data={data} />
          ))}
          <Link href={"/"}>
            <h4 className="font-bold flex flex-wrap gap-2">
              <EarthIcon />
              United States
            </h4>
          </Link>
        </div>
      </div>
      <div className="sm:hidden p-2">
        <AccordionBox data={data} />
        <Link href={"/"}>
          <h4 className="font-bold flex flex-wrap gap-2 mt-5">
            <EarthIcon />
            United States
          </h4>
        </Link>
      </div>
      <Separator className="sm:hidden my-5" />
      <div className="my-4 text-foreground text-sm text-gray-500 font-semibold flex flex-col sm:flex-row flex-wrap gap-5 cursor-pointer mb-20 p-2">
        <p>© 2024 Llam, Inc. All rights reserved</p>
        <p>Guides</p>
        <p>Terms of Sale</p>
        <p>Terms of Use</p>
        <p>Llam Privacy Policy</p>
      </div>
    </Container>
  );
};

export default Footer;
