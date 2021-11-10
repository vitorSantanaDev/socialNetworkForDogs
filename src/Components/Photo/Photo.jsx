import React, { useEffect } from "react";
import { useParams } from "react-router";
import { GET_PHOTO } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error/Error";
import Head from "../Helper/Head/Head";
import Loading from "../Helper/Loading/Loading";
import PhotoContent from "../PhotoContent/PhotoContent";
import { PhotoSection } from "./styled";

const Photo = () => {

  const { id } = useParams()
  const { data, loading, error, request} = useFetch()

  useEffect(() => {
    const { url, options } = GET_PHOTO(id)
    request(url, options)
  }, [id, request])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
  return (
    <>
    <Head title={data.photo.title}/>
      <PhotoSection className="container mainContainer">
        <PhotoContent single={true} data={data}/>
      </PhotoSection>
    </>
  );
  return null
};

export default Photo;
