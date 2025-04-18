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
import { PrismicImage } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";

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
        <div className="flex h-[287px] overflow-hidden items-center self-stretch border-b border-[var(--divider-light-default)]">
          {card.portrait && (
            <PrismicImage
              field={card.portrait}
              className="h-full object-cover"
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
            <div className="max-h-[210px] lg:max-h-[300px] overflow-y-auto pr-4">
              <PrismicRichText field={card.details} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CardModal;
