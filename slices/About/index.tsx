import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Default from "./Variants/Default";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice, index, slices, context }) => {
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
    >
      <Display />
    </section>
  );
};

export default About;
