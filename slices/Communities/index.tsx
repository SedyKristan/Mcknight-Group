import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Default from "./Variants/Default";

/**
 * Props for `Communities`.
 */
export type CommunitiesProps = SliceComponentProps<Content.CommunitiesSlice>;

/**
 * Component for "Communities" Slices.
 */
const Communities: FC<CommunitiesProps> = ({
  slice,
  index,
  slices,
  context,
}) => {
  const Display = () => {
    switch (slice.variation) {
      case "default":
        return (
          <Default
            slice={slice}
            index={index}
            slices={slices}
            context={context}
          />
        );
      default:
        return null;
    }
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.section_id ?? undefined}
    >
      <Display />
    </section>
  );
};

export default Communities;
