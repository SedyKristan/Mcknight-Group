import { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type DefaultProps = SliceComponentProps<Content.HeroSlice>;

const Default: FC<DefaultProps> = ({ slice, index, slices, context }) => {
  return (
    <section
      className="relative flex min-h-[90vh] p-6 justify-center items-center self-stretch overflow-hidden"
      style={{ background: "var(--theme-primary-gradient)" }}
    >
      {slice.primary.background_image?.url && (
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-6"
        />
      )}
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-16 flex-1">
          {slice.primary.logo?.url && (
            <div className="relative h-[259px] w-[334px]">
              <PrismicNextImage
                field={slice.primary.logo}
                fill
                priority
                className="object-contain"
              />
            </div>
          )}
          <div className="flex justify-center items-center gap-4 self-stretch">
            {slice.primary.taglines.map((tagline, index) => (
              <Fragment key={index}>
                <h2 className="opacity-80 text-white">{tagline.word}</h2>
                {index < slice.primary.taglines.length - 1 && (
                  <div className="h-full w-[2px] bg-[var(--divider-dark-default)]" />
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
