import React from "react";
import { PhotoItem } from "./styled";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  const handleClick = () => {
    setModalPhoto(photo)
  }

  return (
    <PhotoItem onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </PhotoItem>
  );
};

export default FeedPhotosItem;
