import styled from "styled-components";
import { colors, rwd } from "../../../style/variables";

export const StyledRegisterForm = styled.section`
  width: 100%;
`;

export const P = styled.p`
  color: ${colors.darkGray};
  text-align: center;
  margin: 25px 0 25px 0;
`;

export const UserForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background: none;
  border: 2px solid ${colors.borderGray};
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;

  @media (min-width: ${rwd.desktop}){
    width: 50%;
  }
  
  @media (min-width: ${rwd.bigDesktop}){
    width: 40%;
  }

  @media (min-width: ${rwd.tablet}){
    width: 60%;
  }

  &:nth-child(1) {
    margin: 0;
  }

  ::placeholder {
    text-align: left;
    padding-left: 20px;
    color: ${colors.darkGray};
  }
`;

export const Submit = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: ${colors.blue};
  border-radius: 50px;
  margin-top: 30px;
  color: ${colors.white};
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${rwd.desktop}){
    width: 50%;
  }

  @media (min-width: ${rwd.bigDesktop}){
    width: 40%;
  }

  @media (min-width: ${rwd.tablet}){
    width: 60%;
  }

  &:hover {
    transform: scale(0.8);
    cursor: pointer;
  }
`;

export const SignInText = styled.p`
  color: ${colors.darkGray};
  text-align: center;
  margin-top: 50px;
  font-size: 15px;
`;

export const SignInLink = styled.a`
  text-decoration: none;
  color: ${colors.blue};
  font-weight: bold;
`;
