import styled from "styled-components";
import { colors, screen } from "../..";

type BackgroundImageProps = {
  $image: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 280px;
  display: block;
  position: relative;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.overlayMedium};
    z-index: 1;
  }

  .container {
    max-width: 1024px;
    margin: 0px auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 155px;
    align-items: start;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    height: 100%;
  }

  @media (max-width: ${screen.desktop}) {
    height: 240px;
    .container { gap: 120px; padding: 20px }
  }

  @media (max-width: ${screen.tablet}) {
    height: 200px;
    .container { gap: 72px; padding: 16px }
  }

  @media (max-width: ${screen.mobile}) {
    height: 160px;
    .container { gap: 24px; padding: 12px; align-items: center }
  }
`;

export const Phrase = styled.p`
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  color: ${colors.tertiary};
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: 900;
  font-style: Black;
  font-size: 32px;
  line-height: 100%;
  color: ${colors.tertiary};
`;
