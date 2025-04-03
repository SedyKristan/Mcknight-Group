"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";

const CarouselImages = ({
  images,
}: {
  images: Content.CommunitiesSliceDefaultPrimaryImagesItem["image"][];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!images || images.length === 0)
    return (
      <div className="hidden relative lg:flex justify-center items-center max-w-[696px] min-w-[696px] w-full bg-ghost-primary-40 self-stretch rounded-2xl border border-ghost-primary-40">
        <p className="text-[var(--text-secondary)] italic">
          No images available
        </p>
      </div>
    );

  return (
    <Carousel
      className="hidden relative lg:flex max-w-[696px] bg-ghost-primary-40 self-stretch rounded-2xl border border-ghost-primary-40"
      setApi={setApi}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <PrismicImage field={image} className="object-contain" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white text-[var(--text-primary)]" />
      <CarouselNext className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white text-[var(--text-primary)]" />
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${current === index ? "bg-white" : "bg-white/50"}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselImages;
