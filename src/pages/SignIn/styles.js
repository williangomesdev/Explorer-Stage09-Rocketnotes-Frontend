import styled, { ThemeContext } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 1.5rem;
    margin-top: 5.25rem;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 7.75rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
