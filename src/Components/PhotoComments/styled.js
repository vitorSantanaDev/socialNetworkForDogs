import styled from "styled-components";

export const CommentList = styled.ul `
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  &.single {
    padding: 0px;
  }

  li {
    margin-bottom: .5rem;
    line-height: 1.2;
  }
` 