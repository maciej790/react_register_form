import styled from "styled-components";
import { colors, rwd } from "../../../style/variables";

export const StyledClaimText = styled.header`
  width: 100%;
  text-align: center;

  @media (min-width: ${rwd.desktop}){
    width: 50%;
    text-align: left;
  }

  @media (min-width: ${rwd.bigDesktop}){
    width: 40%;
  }
  
  @media (min-width: ${rwd.tablet}){
    width: 60%;
  }
`;

export const H1 = styled.h1`
  color: ${colors.black};
  font-size: 28px;
  font-weight: 600;
`;

export const P = styled.p`
  margin-top: 15px;
  color: ${colors.darkGray};
`;
