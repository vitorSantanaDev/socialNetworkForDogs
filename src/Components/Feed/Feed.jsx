import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";
import { FeedSection } from "./styled";
import  PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1, 2, 3]);
  const [infinit, setInfinit] = useState(true);

  useEffect(() => {
    let wait = false;
    const infinitScroll = () => {

      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (infinit) {
        if (scroll > height * 0.75 && !wait) {
          setPages((page) => [...page, page.length + 1]);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };
    window.addEventListener("wheel", infinitScroll);
    window.addEventListener("scroll", infinitScroll);

    return () => {
      window.removeEventListener("wheel", infinitScroll);
      window.removeEventListener("scroll", infinitScroll);
    };
  }, [infinit]);

  return (
    <FeedSection>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          page={page}
          key={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinit={setInfinit}
        />
      ))}
    </FeedSection>
  );
};

Feed.defaultProps = {
  user: 0
}

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
}

export default Feed;
