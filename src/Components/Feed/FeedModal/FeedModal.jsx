import React, { useEffect } from "react";
import { Modal } from "./styled";
import useFetch from "../../../hooks/useFetch";
import { PHOTO_GET } from "../../../api/api";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";
import PhotoContent from "../../PhotoContent/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <Modal onClick={handleOutsideClick}>
        {error && <Error error={error}/>}
        {loading && <Loading />}
        {data && <PhotoContent data={data}/>}
    </Modal>
  );
};

export default FeedModal;
