import styled from "styled-components";
import { colors } from "../..";

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const FooterLogo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 32.5px;
`;

export const FooterMedias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const MediasImage = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 4px;
`;

export const FooterDescription = styled.p`
  width: 480px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  color: ${colors.primary};
`;