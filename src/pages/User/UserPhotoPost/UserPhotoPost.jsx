import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";

import { PHOTO_POST } from "../../../services/photo.service";

import Head from "../../../Components/Helper/Head/Head";
import Error from "../../../Components/Helper/Error/Error";
import Button from "../../../Components/Forms/Button/Button";
import Input from "../../../Components/Forms/Input/Input";

import { PhotoPostSection } from "./styled";

const UserPhotoPost = () => {
  const name = useForm();
  const age = useForm("number");
  const weight = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/account");
  }, [data, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("idade", age.value);
    formData.append("peso", weight.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  };

  const handleImageChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <PhotoPostSection className="leftAnimation">
      <Head title="Postar foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="Idade" type="text" name="idade" {...age} />
        <Input label="Peso" type="text" name="peso" {...weight} />
        <input type="file" name="img" id="img" onChange={handleImageChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img && (
          <div
            className="previewPhoto"
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </PhotoPostSection>
  );
};

export default UserPhotoPost;
