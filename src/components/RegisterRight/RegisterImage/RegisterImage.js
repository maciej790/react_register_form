import React from "react";
import { StyledRegisterImage, IMG } from "./StyledRegisterImage";
import bcg from '../../../assets/bcg.jpg'

function RegisterImage() {
  return(
    <StyledRegisterImage>
      <IMG src={bcg}></IMG>
    </StyledRegisterImage>
  ) 
}

export default RegisterImage;
