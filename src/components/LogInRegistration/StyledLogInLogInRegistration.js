import styled from "styled-components";

export const StyledDivFromLogin = styled.div`
  display: flex;
  flex-direction: column;

  Form {
    display: grid;
    margin: 20px;
    justify-content: center;
  }

  input {
    margin: 20px;
    height: 30px;
    width: 400px;
    border-style: solid;
    border-color: #000;
  }
  .accespt__Term__Styled {
    width: 30px;
  }
  .accespt__Term__Styled__Registration {
    width: 20px;
    height: 20px;
    justify-content: left;
  }
  .button__Submit__Styled__Login {
    width: 600px;
    height: 200px;
    margin-top: 50px;
  }
`;
