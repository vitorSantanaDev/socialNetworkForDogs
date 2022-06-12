import React from "react";

import Image from "../../Helper/Image/Image";

import * as S from "./styled";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => setModalPhoto(photo);

  return (
    <S.PhotoItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <S.Hits>{photo.acessos}</S.Hits>
    </S.PhotoItem>
  );
};

export default FeedPhotosItem;
