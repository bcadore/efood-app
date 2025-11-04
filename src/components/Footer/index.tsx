import * as S from "./styles";

import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram-logo.png";
import facebook from "../../assets/facebook-logo.png";
import twitter from "../../assets/twitter-logo.png";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterLogo src={logo} alt="Logo" />
        <S.FooterMedias>
            <S.MediasImage src={instagram} alt="Instagram" />
            <S.MediasImage src={facebook} alt="Facebook" />
            <S.MediasImage src={twitter} alt="Twitter" />
        </S.FooterMedias>
        <S.FooterDescription>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.FooterDescription>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
