import Container from "@/components/Container";
import { Section, SectionHeadline } from "@/components/Section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ScrollableCards from "../../components/ScollableCards";
import Image from "next/image";
import gridLayers from "../../../../public/grid-layers-v2.png";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Default = ({ slice, index, slices, context }: TeamProps) => {
  console.log(slice.primary.cards);
  return (
    <Section
      className="relative"
      style={{ background: "var(--team-gradient)" }}
    >
      <Image
        src={gridLayers}
        alt="Grid Layers v2"
        width={1440}
        height={1024}
        className="absolute top-1/2 scale-[1.2] -translate-y-1/2 -translate-x-1/2 left-1/2 min-w-[1440px] min-h-[1024px] object-contain"
      />
      <Container>
        <SectionHeadline align="center" className="w-full " theme="dark">
          {slice.primary.headline}
        </SectionHeadline>
        <ScrollableCards cards={slice.primary.cards} />
      </Container>
    </Section>
  );
};

export default Default;
