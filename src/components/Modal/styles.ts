import styled from "styled-components";
import { colors } from "../../index"; // Ajuste o caminho conforme a localização do seu arquivo de cores

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.overlayDark};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: ${colors.primary};
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  position: relative;
  display: flex;
  gap: 24px;
  color: ${colors.tertiary};
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 16px;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`;

export const Button = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  width: fit-content;
  margin-top: 16px;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1); 
`;

export const ModalAvisoContent = styled(ModalContent)`
  max-width: 480px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
  padding: 40px;
`;

export const ModalAvisoTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ModalAvisoText = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 16px;
`;

export const ActionButton = styled(Button)`
  margin-top: 0;
`;

export const OutlinedButton = styled(ActionButton)`
  background-color: ${colors.white};
  border: 1px solid ${colors.secondary};
  color: ${colors.primary};
`;