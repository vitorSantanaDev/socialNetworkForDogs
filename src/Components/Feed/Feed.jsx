import React, { useState } from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";
import { FeedSection } from "./styled";

const Feed = () => {

  const [modalPhoto, setModalPhoto] = useState(null)
  return (
    <FeedSection>
      {modalPhoto && <FeedModal photo={modalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </FeedSection>
  );
};

export default Feed;
