import React from "react";
import { Link } from "react-router-dom";
import { PhotoContentDiv } from "./styled";
import { H1Element } from "../../Components/Titles/H1/H1";
import PhotoComments from "../PhotoComments/PhotoComments";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <PhotoContentDiv>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p>
            <Link to={`/profile/${photo.id}`}>@{photo.author}</Link>
            <span className="views">{photo.acessos}</span>
          </p>
          <H1Element>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </H1Element>
          <ul className="attributes">
            <li>{photo.peso} KG</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} Anos` : `${photo.idade} Ano`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </PhotoContentDiv>
  );
};

export default PhotoContent;
