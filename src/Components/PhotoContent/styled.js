import styled, { keyframes } from "styled-components";
import Views from "../../Assets/visualizacao-black.svg";

const enterAnimation = keyframes `
  to {
    opacity: initial;
    transform: initial;
  }
`

export const PhotoContentDiv = styled.div `
    margin: auto;
    height: 36rem;
    border-radius: .2rem;
    background-color: #FFF;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: ${enterAnimation} .3s forwards;

    .details {
      padding: 2rem 2rem 0 2rem;
    }

    .img {
      grid-row: 1/4;
    }

    .comments {
      padding: 0 2rem;
    }

    .author {
      opacity: .5;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a:hover {
        text-decoration: underline;
      }
    }

    .views::before {
      content: "";
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: .5rem;
      background: url('${Views}');
    }

    .attributes {
      display: flex;
      font-size: 1.125rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 2rem;

      li {
        margin-right: 2rem;

        &::before {
          content: "";
          display: inline-block;
          height: 20px;
          margin-right:.5rem;
          position: relative;
          top: 3px;
          width: 2px;
          background-color: #333;
          margin-top: 5px;
        }
      }
    }

    &.single {
      grid-template-columns: 1fr;
      height: auto;

       img {
         grid-row: 1;
         border-radius: .4rem;
         overflow: hidden;
       }

       .details {
         padding: 1rem 0px 0px 0px;
       }
    }


    @media (max-width: 64rem) {
      height: auto;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
      grid-template-columns: minmax(20rem, 40rem);

      .img {
        grid-row: 1;
      }
    }
`
