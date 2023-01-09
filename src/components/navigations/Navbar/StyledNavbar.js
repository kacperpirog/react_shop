import { Link } from "react-router-dom";
import styled from "styled-components";
// import { mainTheme } from "../../../globalStyles/themes/mainTheme";
import cartImg from "../../../assets/images/koszyk.svg";

export const StyledNav = styled.nav`
  /* position: fixed; */
  z-index: 101;
  width: 100vw;
  min-height: 8vh;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(236, 236, 236);
  ul {
    list-style: none;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    button {
      color: #000;
      background-color: #438548;
      border: none;
      padding: 15px 10px 15px 10px;
      text-decoration: none;
      background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
     no-repeat;
     transition: 1s background-size;
     font-family: "Outfit", sans-serif;

  &:hover {
    text-decoration: none;
    color: #000;
    background-size: 100% 0.1em;
    font-family: "Outfit", sans-serif;
  }

    }
    li {
      align-self: center;
         } 
        .cart-btn {
          cursor: pointer;
          background-color: transparent;
          color: rgb(51, 51, 51);
          font-size: 15px;
          font-family: "Scope One", serif;
          outline: none;
          border: none;
          position: relative;
          background-image: url(${cartImg});
          background-repeat: no-repeat;
          background-size: 70%;
          background-position: 50% 35%;
          border-radius: 50%;
          width: 50px;
          height: 50px;
  
          }
         }
      i { 
        &:hover {
          text-decoration: none;
          background-size: 100% 0.1em;
        }
      }
      a {
        text-decoration: none;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  background-color: #438548;
  padding: 15px 10px 15px 10px;
  text-decoration: none;
  background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
    no-repeat;
  transition: 1s background-size;
  font-family: "Outfit", sans-serif;

  &:hover {
    text-decoration: none;
    color: #000;
    background-size: 100% 0.1em;
    font-family: "Outfit", sans-serif;
  }
`;

export const StyledTopNav = styled.div`
  background-color: #6a9e06;
  padding: 20px;
  p {
    display: flex;
    color: white;
    font-size: 20px;
    justify-content: center;
  }
`;
export const StyledTopInfo = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: silver;
  padding: 20px;
  h5 {
    font-size: 20px;
  }

  i {
    font-size: 20px;
    margin: 0 20px;
  }
`;

export const StyledI = styled.i`
  cursor: pointer;
  color: black;
  display: flex;
  margin: 0x 10px;
  font-size: 20px;

  &:hover {
    color: red;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
