import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  position: ${({ isFilterOpen }) => (isFilterOpen ? "inherit" : "absolute")};
  width: 100%;
  background-color: #6a9e06;
  border: 2px solid silver;
  opacity: ${({ isFilterOpen }) => (isFilterOpen ? 1 : 0)};
  transition: 0.9s ease-in-out;
  overflow: hidden;
  padding: 40px;
`;

export const StyleSelect = styled.select`
  cursor: pointer;
  position: absolute;
  border-style: solid;
  outline: none;
  padding: 8px 20px;
  margin: 20px
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};


  &:hover {
    transform: scale(0.999);
    transition-duration: 0.9s;
  }
`;
