import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { BackgroundImage, LogoImage, Phrase,  } from "./styles";


const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <BackgroundImage>
      <div className="container">
        <Phrase>Restaurantes</Phrase>
        <LogoImage src={logo} alt="Logo do EFOOD." onClick={handleLogoClick} />
        <Phrase>0 produto(s) no carrinho</Phrase>
      </div>
    </BackgroundImage>
  );
};

export default Header;
