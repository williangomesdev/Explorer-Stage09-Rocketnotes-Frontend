import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6.5625rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Links = styled.ul`
  list-style-type: style none;
  > li {
    margin-top: 0.75rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
