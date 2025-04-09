import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import Card from "./Card";

const CardsDesktop = ({
  cards,
}: {
  cards: GroupField<Simplify<Content.AboutSliceDefaultPrimaryServicesItem>>;
}) => {
  return (
    <div className="flex-col gap-8 w-full max-w-[576px] lg:flex hidden">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
export default CardsDesktop;
