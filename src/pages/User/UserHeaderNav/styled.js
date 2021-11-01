import styled from "styled-components";

export const NavElement = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  a, button {
    background-color: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: ease-in-out .2s;

    &:hover, &:focus {
      background-color: #FFF;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    } 

    &.active {
      background: #FFF;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
    }
  }

  a {
    &.active svg > * {
      fill: #fb1;
    }
  }
`;
