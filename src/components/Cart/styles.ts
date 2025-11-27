import styled from 'styled-components'
import { colors } from '../../' // Ajuste se necessário para '../styles' ou onde estiver seu tema

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.overlayDark};
  z-index: 1;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 2;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.secondary};
    border-radius: 5px;
  }

  .items-container {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 24px;
  }
  
  h2 {
    color: ${colors.secondary};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  
  p {
    color: ${colors.secondary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }
  
  .empty-text {
    color: ${colors.secondary};
    text-align: center;
    margin-top: 24px;
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
  margin-bottom: 8px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
  
  label {
    display: block;
    color: ${colors.secondary};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    padding: 8px;
    height: 32px;
    font-weight: 700;
    font-size: 14px;
    color: ${colors.text};
    
    &.error {
      border: 2px solid red;
    }
  }
  
  small {
    color: ${colors.secondary};
    font-size: 12px;
    margin-top: 4px;
    display: block;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
  
  div {
    width: 100%;
  }
`