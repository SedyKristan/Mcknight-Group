import {
  HouseSolid,
  RulerLSolid,
  BillSolid,
  LocationSolid,
  UsersSolid,
} from "@/components/icons";
import { Simplify } from "@/prismicio-types";
import { Content } from "@prismicio/client";

const Card = ({
  card,
}: {
  card: Simplify<Content.AboutSliceDefaultPrimaryServicesItem>;
}) => {
  return (
    <div className="flex lg:h-auto w-[372px]  lg:w-full text-[var(--text-primary-dark)] h-[126px] py-4 px-8 lg:py-4 lg:px-8 items-center gap-8 rounded-xl bg-[var(--color-primary-light)] shadow-[var(--drop-shadow-sm)]">
      {card.icon === "house" ? (
        <HouseSolid className="h-10 w-10" />
      ) : card.icon === "ruler-l" ? (
        <RulerLSolid className="h-10 w-10" />
      ) : card.icon === "users" ? (
        <UsersSolid className="h-10 w-10" />
      ) : card.icon === "location" ? (
        <LocationSolid className="h-10 w-10" />
      ) : card.icon === "bill" ? (
        <BillSolid className="h-10 w-10" />
      ) : null}
      <div className="self-stretch w-[2px] bg-[var(--divider-dark-default)]"></div>
      <div className="flex flex-col flex-1">
        <h2>{card.label}</h2>
        <p className="w-full whitespace-normal">{card.details}</p>
      </div>
    </div>
  );
};
export default Card;
