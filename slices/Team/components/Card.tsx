import { Button } from "@/components/ui/button";
import { Simplify } from "@/prismicio-types";
import { Content, asText } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import CardModal from "./CardModal";
import Image from "next/image";

const Card = ({
  card,
}: {
  card: Simplify<Content.TeamSliceDefaultPrimaryCardsItem>;
}) => {
  return (
    <CardModal card={card}>
      <div className="flex flex-col w-[276px] hover:-translate-y-1 cursor-pointer transition-all duration-150 ease-in-out h-[405px] overflow-hidden rounded-2xl border border-ghost-primary-40 shadow-[var(--drop-shadow-md)]">
        <div className="self-stretch flex-[1_0_0] bg-white">
          {card.portrait && (
            <PrismicImage
              field={card.portrait}
              className="h-full object-cover"
            />
          )}
        </div>
        <div className="flex items-center flex-col p-3 gap-4 bg-primary-lighter self-stretch">
          <div className="flex flex-col gap-3 self-stretch">
            <div className="flex flex-col self-stretch">
              <h4 className="self-stretch text-center">{card.name}</h4>
              <h6 className="self-stretch text-center">{card.position}</h6>
            </div>
            <p className="self-stretch text-sm truncate overflow-hidden">
              {asText(card.details)}
            </p>
          </div>
        </div>
      </div>
    </CardModal>
  );
};

export default Card;
