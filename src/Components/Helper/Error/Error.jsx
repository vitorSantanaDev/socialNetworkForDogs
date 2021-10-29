import React from "react";
import { ErrorElment } from "./styled";

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorElment>{error}</ErrorElment>;
};

export default Error;
