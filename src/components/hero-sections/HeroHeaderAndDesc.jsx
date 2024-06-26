import CategoryLink from "../s/CategoryBtn";
import { Button } from "../ui/button";

const HeroHeaderAndDesc = ({ message }) => {
  return (
    <div className="flex flex-col gap-3 sm:justify-center sm:items-center my-5 sm:my-8 p-2">
      <h1 className="inline-block  text-4xl sm:text-7xl font-bold">
        {message.title}
      </h1>
      <p className="">{message.desc}</p>
      <div>
        <CategoryLink category={message.category}>
          <Button variant="" size="sm" className="rounded-lg">
            Shop
          </Button>
        </CategoryLink>
      </div>
    </div>
  );
};

export default HeroHeaderAndDesc;
