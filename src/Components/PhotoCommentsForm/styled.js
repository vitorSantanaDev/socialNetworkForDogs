import styled, { keyframes } from "styled-components";

const barkAnimation = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FormComments = styled.form `
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  &.single {
    margin: 1rem 0;
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    padding: .5rem;
    border-radius: .2rem;
    background-color: #eee;
    transition: .2s;

    &:focus, &:hover {
      outline: none;
      border-color: #fb1;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:disabled {
      cursor: wait;
      opacity: 0.7;
    }

    &:focus > svg path, &:hover > svg path {
      fill: #fea;
      stroke: #fb1;
    }

    &:focus > svg g, &:hover > svg g {
      animation: ${barkAnimation} .6s infinite;
    }
  }
`