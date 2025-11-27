import styled from "styled-components";
import { colors } from "../..";

export const Section = styled.section`
  padding: 80px 0;
  background-color: ${colors.tertiary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  justify-items: center;
  justify-content: center;

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
