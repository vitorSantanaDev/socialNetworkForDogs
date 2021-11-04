import React, { useState } from "react";
import { COMMENT_POST } from "../../api/api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error/Error";
import { FormComments } from "./styled";

const PhotoCommentsForm = ({ id, setComments }) => {
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
    <FormComments onSubmit={handleSubmit}>
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
