import styled, { css } from "styled-components";

interface IProps {
  active?: boolean;
}

export const Container = styled.div<IProps>`
  ${({theme, active}) => css`
    align-items: center;
    background-color: ${active? theme.colors.mainBlue : theme.colors.mainWhite};
    border: solid 1px ${theme.colors.mainBlack};
    cursor: pointer;
    display: flex;
    flex-basis:0;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.hoverBlue};
    }
  `}
`;
