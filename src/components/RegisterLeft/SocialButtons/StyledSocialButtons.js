import styled from "styled-components";
import { colors, rwd } from "../../../style/variables";

export const StyledSocialButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (min-width: ${rwd.desktop}){
    width: 50%;
  }

  @media (min-width: ${rwd.bigDesktop}){
    width: 40%;
  }

  @media (min-width: ${rwd.tablet}){
    width: 60%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background: none;
  border: 2px solid ${colors.borderGray};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  font-weight: bold;
`;

export const GoogleIcon = styled.div`
  margin-right: 20px;
  color: red;
`;

export const FaceBookIcon = styled(GoogleIcon)`
  color: blue;
`;
