import Container from "@/components/Container";
import { Section, SectionHeadline, SectionWrapper } from "@/components/Section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ScrollableCards from "../../components/ScollableCards";
import Image from "next/image";
import gridLayers from "../../../../public/grid-layers-v2.png";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Default = ({ slice, index, slices, context }: TeamProps) => {
  const { section_id, headline, cards } = slice.primary;
  const sectionId = (section_id?.toString() || "team").toLowerCase();

  return (
    <Section
      id={sectionId}
      className="relative overflow-hidden px-0 lg:px-0"
      style={{ background: "var(--team-gradient)" }}
    >
      <Image
        src={gridLayers}
        alt="Grid Layers v2"
        width={1440}
        height={1024}
        className="absolute top-1/2 scale-[1.2] -translate-y-1/2 -translate-x-1/2 left-1/2 min-w-[1440px] min-h-[1024px] object-contain"
      />
      <Container className="!max-w-fit">
        <SectionWrapper className="px-4">
          <SectionHeadline align="center" className="w-full " theme="dark">
            {headline}
          </SectionHeadline>
        </SectionWrapper>
        <ScrollableCards cards={cards} />
      </Container>
    </Section>
  );
};

export default Default;
