import styled from "styled-components";
import foto_5 from "../../assets/images/slider/foto_5.jpg";

export const StyledSection = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;
  background-image: url(${foto_5});
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  h1 {
    width: 300px;
    margin: 10px;
    text-align: center;
    color: #fff;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 60px;
  padding: 5px;
  justify-content: center;
`;

export const StyledDivtTxtArea = styled.div``;

export const StyledImgProduct = styled.img`
  width: 200px;
`;
