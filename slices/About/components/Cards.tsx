import { Simplify } from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import { Content } from "@prismicio/client";
import Card from "./Card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Cards = ({
  cards,
}: {
  cards: GroupField<Simplify<Content.AboutSliceDefaultPrimaryServicesItem>>;
}) => {
  return (
    <ScrollArea className="w-full lg:hidden whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default Cards;
