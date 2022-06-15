import React, { useEffect } from "react";
import { useParams } from "react-router";

import useFetch from "../../hooks/useFetch";

import { GET_PHOTO_BY_ID } from "../../services/photo.service";

import Head from "../Helper/Head/Head";
import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading/Loading";
import PhotoContent from "../PhotoContent/PhotoContent";

import { PhotoSection } from "./styled";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO_BY_ID(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <Head title={data.photo.title} />
        <PhotoSection className="container mainContainer">
          <PhotoContent single={true} data={data} />
        </PhotoSection>
      </>
    );
  return null;
};

export default Photo;
