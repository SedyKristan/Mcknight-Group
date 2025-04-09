import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AnimatedContainer from "../../components/AnimtedContainer";
import AnimatedBackgroundPattern from "../../components/AnimatedBackgroundPattern";

export type DefaultProps = SliceComponentProps<Content.HeroSlice>;

const Default: FC<DefaultProps> = ({ slice }) => {
  return (
    <section
      className="relative flex min-h-screen p-6 justify-center items-center self-stretch overflow-hidden"
      style={{ background: "var(--team-gradient)" }}
    >
      <AnimatedBackgroundPattern />
      <AnimatedContainer slice={slice} />
    </section>
  );
};

export default Default;
