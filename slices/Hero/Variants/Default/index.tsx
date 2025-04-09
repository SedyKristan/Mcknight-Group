import { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AnimatedContainer from "../../components/AnimtedContainer";

export type DefaultProps = SliceComponentProps<Content.HeroSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  return (
    <section
      className="relative flex min-h-screen p-6 justify-center items-center self-stretch overflow-hidden"
      style={{ background: "var(--team-gradient)" }}
    >
      <AnimatedContainer slice={slice} />
    </section>
  );
};

export default Default;
