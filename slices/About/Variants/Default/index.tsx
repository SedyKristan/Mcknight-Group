import { FC, Fragment } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import SectionHeadline from "@/components/Section/SectionHeadline";
import Container from "@/components/Container";
import Cards from "../../components/Cards";
import SectionWrapper from "@/components/Section/SectionWrapper";
import { Section } from "@/components/Section";
import CardsDesktop from "../../components/CardsDesktop";
export type DefaultProps = SliceComponentProps<Content.AboutSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  const { section_id, description, services, headline } = slice.primary;
  // Use the section_id from Prismic, fallback to "About" if not set
  const sectionId = (section_id?.toString() || "about").toLowerCase();

  return (
    <Section
      id={sectionId}
      className="bg-ghost-primary-10 px-0 lg:px-10 scroll-mt-20"
    >
      <Container direction="row" className="flex-col lg:flex-row">
        <SectionWrapper className="px-4 lg:gap-8">
          <SectionHeadline>{headline}</SectionHeadline>
          <div className="text-2xl">
            <PrismicRichText field={description} />
          </div>
        </SectionWrapper>
        <CardsDesktop cards={services} />
        <Cards cards={services} />
      </Container>
    </Section>
  );
};
export default Default;
