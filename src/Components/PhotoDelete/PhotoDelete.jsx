import React from "react";

import { PHOTO_DELETE } from "../../services/photo.service";

import useFetch from "../../hooks/useFetch";

import * as S from "./styled";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza quedeseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <S.ButtonDelete disabled>Deletando...</S.ButtonDelete>
      ) : (
        <S.ButtonDelete onClick={handleClick}>Deletar</S.ButtonDelete>
      )}
    </>
  );
};

export default PhotoDelete;
