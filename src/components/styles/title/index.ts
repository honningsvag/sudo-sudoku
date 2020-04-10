import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.mainWhite};
    margin-top: 0;
    text-align: center;
  `}
`;
