import logo from "../../assets/logo.png";

import { BackgroundImage, LogoImage, Phrase } from "./styles";

const Hero = () => (
  <BackgroundImage>
    <div className="container">
      <LogoImage src={logo} alt="Logo do EFOOD." />
      <Phrase>Viva experiências gastronômicas no conforto da sua casa.</Phrase>
    </div>
  </BackgroundImage>
);

export default Hero;
