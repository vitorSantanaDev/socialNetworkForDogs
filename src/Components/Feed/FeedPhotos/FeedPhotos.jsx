import React, { useEffect } from "react";

import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../api/api";

import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";

import * as S from "./styled";

const FeedPhotos = ({ user, setInfinit, page, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    (async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < 3) {
        setInfinit(false);
      }
    })();
  }, [request, user, page, setInfinit]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      {data && (
        <S.Photos className="leftAnimation">
          {data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </S.Photos>
      )}
    </>
  );
};

export default FeedPhotos;
