import styled, { keyframes } from "styled-components"

export const ImageWrapper = styled.div `
  display: grid;

  img {
    display: block;
    max-width: 100%;
    grid-area: 1 / 1;
    opacity: 0;
    transition: ease-in-out .8s;
  }
`

const skeleton = keyframes `
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`


export const Skeleton = styled.div `
  grid-area: 1/ 1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #FFF 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeleton} .8s infinite;
`
