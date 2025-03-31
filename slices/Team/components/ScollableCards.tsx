import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import Card from "./Card";

const ScrollableCards = ({
  cards,
}: {
  cards: GroupField<Simplify<Content.TeamSliceDefaultPrimaryCardsItem>>;
}) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ScrollableCards;
