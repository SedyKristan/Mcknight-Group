"use client";

import Container from "@/components/Container";
import { Section, SectionHeadline, SectionWrapper } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC, useState } from "react";
import { transformCommunityImages } from "@/utils/transformers";
import ScrollableImages from "../../components/ScrollableImages";
import CarouselImages from "../../components/CarouselImages";

export type DefaultProps = SliceComponentProps<Content.CommunitiesSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  const transformedImages = transformCommunityImages(slice.primary.images);
  const defaultCommunity = `item-1`;
  const [selectedCommunity, setSelectedCommunity] = useState(defaultCommunity);

  const getImagesForCommunity = (label: string) => {
    return transformedImages.find((item) => item.label === label)?.images ?? [];
  };

  return (
    <Section>
      <Container>
        <SectionWrapper>
          <SectionHeadline>{slice.primary.headline}</SectionHeadline>
          <div className="flex gap-10 self-stretch">
            <Accordion
              type="single"
              defaultValue={defaultCommunity}
              value={selectedCommunity}
              onValueChange={(value) =>
                setSelectedCommunity(value || defaultCommunity)
              }
              className="flex w-full flex-col gap-5 self-stretch text-[var(--text-primary)]"
            >
              {slice.primary.communities.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="py-5 flex flex-col gap-3 rounded-xl border border-[var(--color-ghost-primary-20)] bg-[var(--color-ghost-primary-10)]"
                >
                  <AccordionTrigger className="p-0 px-5">
                    <h2>{item.label}</h2>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 flex flex-col gap-3">
                    <div className="px-5">
                      <PrismicRichText field={item.details} />
                    </div>
                    <ScrollableImages
                      images={getImagesForCommunity(item.label ?? "")}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <CarouselImages
              images={getImagesForCommunity(
                slice.primary.communities.find(
                  (item, index) => `item-${index + 1}` === selectedCommunity
                )?.label ?? ""
              )}
            />
          </div>
        </SectionWrapper>
      </Container>
    </Section>
  );
};

export default Default;
