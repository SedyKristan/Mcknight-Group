import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type DefaultProps = SliceComponentProps<Content.HeroSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  return <div className="relative">{/* Add your hero content here */}</div>;
};

export default Default;
