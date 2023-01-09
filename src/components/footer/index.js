import React from "react";
import { StyledFooterDiv } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterDiv>
      <form>
        <h5> Subscibe and stay on top of our latest news and promotions</h5>
        <input type="email" placeholder="Enter your email here"></input>
      </form>
    </StyledFooterDiv>
  );
};

export default Footer;
