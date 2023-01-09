import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border-style: solid;
  outline: none;
  padding: 8px 20px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  width: ${({ width }) => (width ? width : "150px")};
  width: ${({ height }) => (height ? height : "150px")};

  &:hover {
    transform: scale(0.9);
    transition-duration: 0.9s;
  }

  ${({ footerBtn }) =>
    footerBtn &&
    css`
      padding: 20px 50px;
      border-radius: 30px;
    `}
`;
