import React from "react";
import {
  StyledRegisterForm,
  P,
  UserForm,
  Input,
  Submit,
  SignInText,
  SignInLink,
} from "./StyledRegisterForm";

function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledRegisterForm>
      <P>or use e-mail</P>
      <UserForm action="" method="post" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <Submit type="submit" value="Register" name="submit" />
      </UserForm>
      <SignInText>
        Already have an account?{" "}
        <span>
          <SignInLink href="#">Sign in</SignInLink>
        </span>
      </SignInText>
    </StyledRegisterForm>
  );
}

export default RegisterForm;
