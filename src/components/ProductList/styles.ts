import styled from "styled-components";
import { colors } from "../..";

export const Section = styled.section`
  padding: 80px 0;
  background-color: ${colors.tertiary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
