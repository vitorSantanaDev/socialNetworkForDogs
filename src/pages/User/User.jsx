import React from "react";
import { Route, Routes } from "react-router";
// import { H1Element } from "../../Components/Titles/H1/H1";
import { UserSection } from "./styled";
import Feed from "../../Components/Feed/Feed";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserHeader from "./UserHeader/UserHeader";
import UserStatistics from "./UserStatistics/UserStatistics";

const User = () => {
  return (
    <UserSection className="container">
      {/* <H1Element>Minha conta</H1Element> */}
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStatistics />} />
      </Routes>
    </UserSection>
  );
};

export default User;
