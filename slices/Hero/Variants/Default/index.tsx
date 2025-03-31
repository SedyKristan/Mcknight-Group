import { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import BackgroundPatterns from "../../components/BackgroundPatterns";

export type DefaultProps = SliceComponentProps<Content.HeroSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  return (
    <section className="relative bg-primary flex min-h-[90vh] p-6 justify-center items-center self-stretch overflow-hidden">
      <BackgroundPatterns />
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-16 flex-1">
          {slice.primary.logo?.url && (
            <div className="relative h-[195px] w-[252px]">
              <PrismicNextImage
                field={slice.primary.logo}
                fill
                priority
                className="object-contain"
              />
            </div>
          )}
          <div className="flex justify-center items-center gap-8 self-stretch">
            {slice.primary.taglines.map((tagline, index) => (
              <Fragment key={index}>
                <h2 className="opacity-80  text-white">{tagline.word}</h2>
                {index < slice.primary.taglines.length - 1 && (
                  <div className="hidden h-full w-[2px] bg-[var(--divider-dark-default)]" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default;
