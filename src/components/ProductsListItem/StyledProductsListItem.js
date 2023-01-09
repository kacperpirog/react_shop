import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  justify-content: center;
  position: relative;
  Link {
    cursor: pointer;
  }
  h4 {
  }
  h5 {
    font-size: 30px;
  }
  div {
  }
`;

export const StyledImg = styled.img`
  cursor: pointer;
  width: 200px;
`;

export const ButtonFavProduct = styled.button`
  position: absolute;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  width: 35px;
  height: 35px;
  left: 230px;
  bottom: 148px;
  font-size: 25px;
  :hover {
    font-size: 30px;
  }
`;
