import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { UserSection } from "./styled";
import Feed from "../../Components/Feed/Feed";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserHeader from "./UserHeader/UserHeader";
import UserStatistics from "./UserStatistics/UserStatistics";
import { UserContext } from "../../context/useContext";
import NotFound from "../../Components/NotFound/NotFound"
import Head from "../../Components/Helper/Head/Head";

const User = () => {

  const { data } = useContext(UserContext)

  return (
    <UserSection className="container">
      <Head title="Minha conta"/>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStatistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserSection>
  );
};

export default User;
