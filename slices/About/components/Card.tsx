import { HouseSolid } from "@/components/icons";
import { Simplify } from "@/prismicio-types";
import { Content } from "@prismicio/client";

const Card = ({
  card,
}: {
  card: Simplify<Content.AboutSliceDefaultPrimaryServicesItem>;
}) => {
  console.log("ito yun", card.label);
  return (
    <div className="flex w-[372px] text-[var(--text-primary-dark)] h-[126px] py-4 px-8 items-center gap-8 rounded-xl bg-[var(--color-primary-light)] shadow-[var(--drop-shadow-sm)]">
      <HouseSolid className="h-10 w-10" />
      <div className="h-full w-[2px] bg-[var(--divider-dark-default)]"></div>
      <div className="flex flex-col flex-1">
        <h2>{card.label}</h2>
        <p className="w-full whitespace-normal">{card.details}</p>
      </div>
    </div>
  );
};
export default Card;
