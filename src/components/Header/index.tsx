import logo from "../../assets/logo.png";

import { BackgroundImage, LogoImage, Phrase,  } from "./styles";


const Header = () => {
  return (
    <BackgroundImage>
      <div className="container">
        <Phrase>Restaurantes</Phrase>
        <LogoImage src={logo} alt="Logo do EFOOD." />
        <Phrase>0 produto(s) no carrinho</Phrase>
      </div>
    </BackgroundImage>
  );
};

export default Header;
