import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 800px;
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  h1,
  h3,
  h4,
  h5,
  p {
    margin: 20px;
  }

  img {
    cursor: pointer;
    width: 400px;
  }
  .button__buy__and_fav {
    display: flex;
    align-items: center;
    margin: 20px;
    i {
      font-size: 20px;
    }
    .singlePage__Add__To__Fav {
      background: #fff;
      :hover {
        color: red;
      }
    }
  }
`;
