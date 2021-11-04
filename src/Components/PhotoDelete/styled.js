import styled from "styled-components";

export const ButtonDelete = styled.button `
  background-color: #ddd;
  padding: .3rem .6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: .875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: .2rem;
  transition: .3s;

  &:focus, &:hover {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`