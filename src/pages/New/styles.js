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

export const Form = styled.form`
  max-width: 34.375rem;
  margin: 38px auto;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.25rem;

    > a{
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
