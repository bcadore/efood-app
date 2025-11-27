import styled from "styled-components";
import { colors } from "../..";

export const CardContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 140px;
  }
  @media (max-width: 480px) {
    height: 120px;
  }
  
`;

export const Content = styled.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.secondary};
  margin-bottom: 8px;
  line-height: 100%;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.secondary};
  line-height: 22px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Porcao = styled.span`
  font-size: 14px;
  color: ${colors.primary};
`;
