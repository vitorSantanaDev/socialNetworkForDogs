import React, { useState } from "react";
import { ImageWrapper, Skeleton } from "./styled";

const Image = ({ alt, ...props}) => {
  const [skeleton, setSkeleton] = useState(true)

  const handleLoad = ({ target }) => {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <>
      <ImageWrapper>
        {skeleton && <Skeleton></Skeleton>}
        <img onLoad={handleLoad} className="img" alt={alt} {...props}/>
      </ImageWrapper>
    </>
  );
};

export default Image;
