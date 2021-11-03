import React from "react";
import { PhotoItem } from "./styled";

const FeedPhotosItem = ({ photo }) => {
  return (
    <PhotoItem>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </PhotoItem>
  );
};

export default FeedPhotosItem;
