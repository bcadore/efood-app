import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from "../../assets/logo.png";

import { BackgroundImage, LogoImage, Phrase } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleLogoClick = () => {
    navigate("/");
  };

  const openCart = () => {
    dispatch(open())
  }

  return (
    <BackgroundImage>
      <div className="container">
        <Phrase>Restaurantes</Phrase>
        <LogoImage src={logo} alt="Logo do EFOOD." onClick={handleLogoClick} />
        
        <Phrase onClick={openCart} style={{ cursor: 'pointer' }}>
            {items.length} produto(s) no carrinho
        </Phrase>
      </div>
    </BackgroundImage>
  );
};

export default Header;