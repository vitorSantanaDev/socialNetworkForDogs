import React, { useContext, useState } from "react";
import { UserContext } from "../../context/useContext";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm";
import { CommentList } from "./styled";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  return (
    <>
      <CommentList>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentList>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
