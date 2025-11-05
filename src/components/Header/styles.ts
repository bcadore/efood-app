import styled from "styled-components";
import { colors } from "../..";
import fundo from "../../assets/fundo.png";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    max-width: 1024px;
    margin: 0px auto;
    padding: 40px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: cover;
`;

export const Phrase = styled.p`
  font-size: 18px;
  font-weight: 900;
  font-style: Black;
  color: ${colors.primary};
  font-family: Roboto;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;
