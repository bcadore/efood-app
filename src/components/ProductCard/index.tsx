import * as S from "./styles";

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  porcao: string;
};

const ProductCard = ({
  title,
  description,
  image,
}: ProductCardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.CardImage src={image} alt={title} />
      </S.ImageContainer>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Content>
    </S.CardContainer>
  );
};

export default ProductCard;

