"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gridLayers from "../../../public/grid-layers-v2.png";

const backgroundVariants = {
  hidden: {
    opacity: 0,
    scale: 1.6,
  },
  visible: {
    opacity: 0.8,
    scale: 1.4,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const AnimatedBackgroundPattern: FC = () => {
  return (
    <motion.div
      className="absolute inset-0"
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
    >
      <Image
        src={gridLayers}
        alt="Grid Layers v2"
        width={1440}
        height={1024}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default AnimatedBackgroundPattern;
