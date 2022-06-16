import React, { useState } from "react";

import * as S from "./styled";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <>
      <S.ImageWrapper>
        {skeleton && <S.Skeleton />}
        <img onLoad={handleLoad} className="img" alt={alt} {...props} />
      </S.ImageWrapper>
    </>
  );
};

export default Image;
