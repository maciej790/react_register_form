import React from "react";
import ClaimText from "./ClaimText/ClaimText";
import RegisterForm from "./RegisterForm/RegisterForm";
import SocialButtons from "./SocialButtons/SocialButtons";
import { StyledRegisterLeft } from "./StyledRegisterLeft";

function RegisterLeft() {
  return (
    <StyledRegisterLeft>
      <ClaimText />
      <SocialButtons />
      <RegisterForm />
    </StyledRegisterLeft>
  );
}

export default RegisterLeft;
