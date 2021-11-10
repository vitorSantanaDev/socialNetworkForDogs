const { default: styled } = require("styled-components");

export const PhotoPostSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  #img {
    margin-bottom: 1rem;
  }

  .previewPhoto {
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;

    &::after {
      content: "";
      display: block;
      height: 0px;
      padding-bottom: 100%;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;
