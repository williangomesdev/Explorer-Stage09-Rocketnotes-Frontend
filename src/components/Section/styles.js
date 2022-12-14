import styled from "styled-components";

export const Container = styled.section`
  margin: 3.5rem 0 1.75rem;

  > h2 {
    border-bottom: 0.0625rem solid
      ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1rem;
    margin-bottom: 1.75rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.25rem;
    font-weight: 400;
  }
`;
