import React, { useState } from "react";

import useFetch from "../../hooks/useFetch";

import { COMMENT_POST } from "../../services/comments.service";

import Error from "../Helper/Error/Error";

import { ReactComponent as Enviar } from "../../Assets/enviar.svg";

import { FormComments } from "./styled";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error, loading } = useFetch();
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <FormComments
      onSubmit={handleSubmit}
      className={`${single ? "single" : ""}`}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comentar..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      {loading ? (
        <button disabled>
          <Enviar />
        </button>
      ) : (
        <button>
          <Enviar />
        </button>
      )}
      {error && <Error error={error} />}
    </FormComments>
  );
};

export default PhotoCommentsForm;
