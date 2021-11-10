import styled from "styled-components";
import Background from "../../Assets/login.jpg"

export const LoginSection = styled.section `
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url('${Background}') no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    &::before {
      display: none;
    }
  }
`
export const DivForms = styled.div `
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`