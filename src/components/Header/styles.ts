import styled from "styled-components";
import { colors } from "../..";
import fundo from "../../assets/fundo.png";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    max-width: 1024px;
    margin: 0px auto;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    gap: 162px;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Phrase = styled.p`
  width: 539px;
  height: 84px;
  text-align: center;
  color: ${colors.primary};
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  margin-left: auto;
  margin-right: auto;
`;
