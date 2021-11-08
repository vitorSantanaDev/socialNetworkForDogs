import React, { useEffect } from "react";
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem";
import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../api/api";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";
import { PhotosUl } from "./styled";

const FeedPhotos = ({ user, setInfinit, page, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if(response && response.ok && json.length < 3) {
        setInfinit(false)
      }

    };
    fetchPhotos();
  }, [request, user, page, setInfinit]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <PhotosUl className="leftAnimation">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </PhotosUl>
    );
  else return null;
};

export default FeedPhotos;
