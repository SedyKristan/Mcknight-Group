"use client";

import Container from "@/components/Container";
import { Section, SectionHeadline, SectionWrapper } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { asLink, Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC, useState, useEffect } from "react";
import { transformCommunityImages } from "@/utils/transformers";
import ScrollableImages from "../../components/ScrollableImages";
import CarouselImages from "../../components/CarouselImages";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export type DefaultProps = SliceComponentProps<Content.CommunitiesSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  const { section_id, images } = slice.primary;
  const sectionId = (section_id?.toString() || "communities").toLowerCase();
  const transformedImages = transformCommunityImages(images);
  const defaultCommunity = `item-1`;
  const [selectedCommunity, setSelectedCommunity] = useState(defaultCommunity);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    handleChange(mediaQuery); // Set initial value
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const getImagesForCommunity = (label: string) => {
    return transformedImages.find((item) => item.label === label)?.images ?? [];
  };

  const getExternalUrl = (link: any) => {
    const url = asLink(link);
    if (!url) return "#";
    return url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;
  };

  return (
    <Section id={sectionId}>
      <Container>
        <SectionWrapper>
          <SectionHeadline>{slice.primary.headline}</SectionHeadline>
          <div className="flex gap-10 self-stretch">
            <Accordion
              type={"single"}
              collapsible={isMobile}
              defaultValue={defaultCommunity}
              value={selectedCommunity}
              onValueChange={setSelectedCommunity}
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
                    {isFilled.link(item.external_link) && (
                      <a
                        href={getExternalUrl(item.external_link)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:justify-end cursor-pointer lg:pr-5 flex justify-center items-center label-sm pt-4 gap-2 text-primary"
                      >
                        Visit {item.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
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
