import React, { useEffect } from "react";

import useFetch from "../../../hooks/useFetch";
import { PHOTO_GET } from "../../../api/api";

import Loading from "../../Helper/Loading/Loading";
import PhotoContent from "../../PhotoContent/PhotoContent";
import Error from "../../Helper/Error/Error";

import * as S from "./styled";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  return (
    <S.Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </S.Modal>
  );
};

export default FeedModal;
