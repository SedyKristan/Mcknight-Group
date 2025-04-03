import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Simplify } from "@/prismicio-types";
import { asText, Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

const CardModal = ({
  card,
  children,
}: {
  card: Simplify<Content.TeamSliceDefaultPrimaryCardsItem>;
  children: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex overflow-hidden p-0 bg-white w-[90vw] flex-col justify-center items-center rounded-2xl border border-black/10 shadow-[var(--drop-shadow-lg)]">
        <div className="flex h-[287px] items-center self-stretch">
          {card.portrait && (
            <PrismicImage
              field={card.portrait}
              className="w-full object-cover"
            />
          )}
        </div>
        <div className="flex px-5 pt-5 pb-8 flex-col gap-4 self-stretch">
          <DialogHeader className="flex flex-col self-stretch gap-0">
            <DialogTitle>{card.name}</DialogTitle>
            {card.position && (
              <h3 className="modal-subtitle ">{card.position}</h3>
            )}
          </DialogHeader>
          {card.details && (
            <DialogDescription>{asText(card.details)}</DialogDescription>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CardModal;
