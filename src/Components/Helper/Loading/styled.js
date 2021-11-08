import styled from "styled-components";

export const LoadingWrapper = styled.div `
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  display: flex;
`

export const LoadingCircle = styled.div `
  margin: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .5);
  padding-left: 5px;
`