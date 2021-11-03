import React from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";
import { FeedSection } from "./styled";

const Feed = () => {
  return (
    <FeedSection>
      <FeedModal />
      <FeedPhotos />
    </FeedSection>
  );
};

export default Feed;
