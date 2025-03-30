import { FC, Fragment } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import SectionHeadline from "@/components/Section/SectionHeadline";
import Container from "@/components/Container";
import Cards from "../../components/Cards";
import SectionWrapper from "@/components/Section/SectionWrapper";
import { Section } from "@/components/Section";

export type DefaultProps = SliceComponentProps<Content.AboutSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  console.log(slice.primary.services);
  return (
    <Fragment>
      <Section className="!hidden">
        <Container>
          <SectionHeadline>{slice.primary.headline}</SectionHeadline>
          <Cards cards={slice.primary.services} />
        </Container>
      </Section>
      <section className="flex py-10 justify-center items-center self-stretch border-b-2 border-[var(--divider-light-default)]">
        <Container className="!gap-4">
          <SectionWrapper className="px-4">
            <SectionHeadline>{slice.primary.headline}</SectionHeadline>
            <PrismicRichText field={slice.primary.description} />
          </SectionWrapper>

          <Cards cards={slice.primary.services} />
        </Container>
      </section>
    </Fragment>
  );
};
export default Default;
