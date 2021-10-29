import styled from "styled-components";

export const LoginFormSection = styled.section`
  .lostPassword {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: currentColor;
      display: block;
    }
  }
`;

export const FormElment = styled.form`
  margin-bottom: 2rem;
`;

export const RegistrationDiv = styled.div`
  margin-top: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
