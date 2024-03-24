import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoad = ({ img, className }) => {
  return (
    <LazyLoadImage
      src={img.src}
      effect="blur"
      width={img.width}
      height={img.height}
      className={`block, ${className}`}
    />
  );
};

export default LazyLoad;
