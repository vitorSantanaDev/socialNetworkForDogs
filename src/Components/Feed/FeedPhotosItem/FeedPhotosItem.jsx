import React from "react";
import { PhotoItem } from "./styled";
import Image from "../../Helper/Image/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <PhotoItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </PhotoItem>
  );
};

export default FeedPhotosItem;
