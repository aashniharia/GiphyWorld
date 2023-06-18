import React from "react";
import { CustomButton } from "./StyledButtonStyles";

const StyledButton = ({ buttonText, handleClick, active }) => {
  return (
    <CustomButton active={active} onClick={() => handleClick(buttonText)}>
      {buttonText}
    </CustomButton>
  );
};

export default StyledButton;
