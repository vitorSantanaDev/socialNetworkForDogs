import styled from "styled-components";

export const Modal = styled.div `
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  background-color: rgba(0,0,0,0.4);
  padding: 2rem calc(15px + 4rem) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(15px + 2rem) 2rem 2rem;;
  }
`