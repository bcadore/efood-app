import styled from 'styled-components'
import { colors } from '../../'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7; // Escurece o fundo
  z-index: 1; // Nível baixo
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 2; // Nível alto (acima do Overlay)
  padding: 32px 8px;
  display: flex;
  flex-direction: column;

  .items-container {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 24px;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.secondary};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      color: ${colors.primary};
      font-weight: 900;
      font-size: 18px;
    }

    span {
      color: ${colors.primary};
      font-weight: 400;
      font-size: 14px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const Prices = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.secondary};
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-weight: 700;
  font-size: 14px;
  border: none;
  padding: 12px;
  cursor: pointer;
`