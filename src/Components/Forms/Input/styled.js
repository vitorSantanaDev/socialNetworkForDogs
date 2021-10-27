import styled from "styled-components";

export const WrapperDiv = styled.div `
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }

  .error {
    color: #f31;
    font-size: .875rem;
    margin-top: 0.25rem;
  }
`

export const InputElement = styled.input `
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: .2s ease-in-out;

  &:hover, &:focus {
    outline: none;
    border-color: #fb1;
    background-color: #FFF;
    box-shadow: 0 0 0 3px #fea;
  }
`