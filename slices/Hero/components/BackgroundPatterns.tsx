import { Fragment } from "react";
import Image from "next/image";
import gridLayers from "../../../public/grid-layers.png";

const BackgroundPatterns = () => {
  return (
    <Fragment>
      <Image
        src={gridLayers}
        alt="Grid Layers"
        width={1513}
        height={1461}
        className="absolute top-1/2 -translate-y-1/2 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 left-0 min-w-[1513px] min-h-[1461px] object-contain"
      />
      <div className="absolute opacity-[0.43] -bottom-[1136px] lg:-bottom-[1031px] lg:-left-[783px] -left-[750px] blur-[360px] rounded-full bg-primary-lighter min-w-[1380px] w-[1380px] aspect-square"></div>
      <div className="absolute opacity-[0.32] -right-[629px] lg:-right-[305px] -top-[518px] lg:-top-[60px] blur-[320px] rounded-full bg-primary-lighter min-w-[879px] w-[879px] aspect-square"></div>
    </Fragment>
  );
};

export default BackgroundPatterns;
