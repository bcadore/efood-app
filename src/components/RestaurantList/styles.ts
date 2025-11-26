import styled from "styled-components";
import { colors } from "../..";

export const Section = styled.section`
  padding: 80px 0;
  background-color: ${colors.tertiary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  max-width: 1024px;
  margin: 0 auto;
`;
