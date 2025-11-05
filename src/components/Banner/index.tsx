import { BackgroundImage, Phrase, Title } from "./styles";

type BannerProps = {
  category: string;
  title: string;
  image: string;
};

const Banner = ({ category, title, image }: BannerProps) => {
  return (
    <BackgroundImage $image={image}>
      <div className="container">
        <Phrase>{category}</Phrase>
        <Title>{title}</Title>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
