import React from "react";
import {
  StyledRegisterForm,
  P,
  UserForm,
  Input,
  Submit,
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
    </StyledRegisterForm>
  );
}

export default RegisterForm;
