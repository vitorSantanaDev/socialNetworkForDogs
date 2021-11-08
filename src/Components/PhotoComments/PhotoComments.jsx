import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/useContext";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm";
import { CommentList } from "./styled";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentSection = useRef();
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <CommentList ref={commentSection} className={`${props.single ? "single" : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentList>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
