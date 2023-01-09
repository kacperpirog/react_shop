import styled from "styled-components";

export const CartWrapper = styled.div`
  overflow-y: auto;
  height: 150vh;
  position: absolute;
  background-color: white;
  width: 26vw;
  z-index: 100;
  border: 2px solid silver;
  border-top: none;
  border-right: none;
  right: ${({ isCartOpen }) => (isCartOpen ? "0" : "-27%")};
  transition: right 0.6s ease-in-out;
  padding: 1% 0 0 1%;
  justify-content: center;

  h5 {
    font-size: 15px;
    margin: 1px;
  }
`;
export const DivStyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
  }
`;

export const StyledLiCart = styled.li`
  div {
    display: flex;
    padding: 20px 0;
    align-items: center;
  }
`;

export const StyledWrapperProduct = styled.div`
  justify-content: center;
`;
