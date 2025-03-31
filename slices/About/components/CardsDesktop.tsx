import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import Card from "./Card";

const CardsDesktop = ({
  cards,
}: {
  cards: GroupField<Simplify<Content.AboutSliceDefaultPrimaryServicesItem>>;
}) => {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[576px]">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
export default CardsDesktop;
