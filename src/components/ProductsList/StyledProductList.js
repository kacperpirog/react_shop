import styled from "styled-components";
export const StyledUlProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledDivProductList = styled.div`
  margin: 20px;
  padding: 20px;
`;

export const ProductWrapper = styled.div`
  padding-right: ${({ isCartOpen }) => (isCartOpen ? "25%" : "0")};
  transition: right 0.6s ease-in-out;
`;
