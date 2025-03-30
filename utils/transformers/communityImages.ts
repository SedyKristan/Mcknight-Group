import { Simplify } from "@/prismicio-types";
import { Content } from "@prismicio/client";

interface TransformedCommunityImage {
  label: string;
  images: Array<Content.CommunitiesSliceDefaultPrimaryImagesItem["image"]>;
}

export const transformCommunityImages = (
  images: Content.CommunitiesSliceDefaultPrimaryImagesItem[]
): TransformedCommunityImage[] => {
  const groupedByCommunity = images.reduce<
    Record<string, TransformedCommunityImage>
  >((acc, { community, image }) => {
    const communityName = community ?? "Uncategorized";
    if (!acc[communityName]) {
      acc[communityName] = {
        label: communityName,
        images: [],
      };
    }
    acc[communityName].images.push(image);
    return acc;
  }, {});

  return Object.values(groupedByCommunity);
};
