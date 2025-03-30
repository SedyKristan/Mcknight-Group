"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Content } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { useState } from "react";

const ScrollableImages = ({
  images,
}: {
  images: Content.CommunitiesSliceDefaultPrimaryImagesItem["image"][];
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  if (!images || images.length === 0) return null;
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[327px] overflow-hidden h-[218px] rounded-lg border border-[var(--color-ghost-primary-40)]"
          >
            {!loadedImages[index] && (
              <Skeleton className="absolute inset-0 w-full h-full" />
            )}
            <PrismicImage
              field={image}
              className={loadedImages[index] ? "" : "opacity-0"}
              onLoad={() => {
                setLoadedImages((prev) => ({ ...prev, [index]: true }));
              }}
            />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ScrollableImages;
