import styled from 'styled-components';
import { colors } from "../..";

export const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid ${colors.primary};
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: 700;
`;

export const Content = styled.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${colors.primary};
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
`;