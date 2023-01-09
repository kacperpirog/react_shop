import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({
  children,
  bgColor,
  footerBtn,
  onClick,
  width,
  disabled,
  height,
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      footerBtn={footerBtn}
      onClick={onClick}
      width={width}
      disabled={disabled}
      height={height}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
