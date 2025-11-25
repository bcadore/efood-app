import * as S from "./styles";

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  porcao: string;
  aoClicar: () => void;
};

const ProductCard = ({
  title,
  description,
  image,
  aoClicar,
}: ProductCardProps) => {

  const getDescricao = (desc: string) => {
      if (desc.length > 95) {
          return desc.slice(0, 92) + '...'
      }
      return desc
  }
  
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.CardImage src={image} alt={title} />
      </S.ImageContainer>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{getDescricao(description)}</S.Description>
        <S.Button onClick={aoClicar}>Adicionar ao carrinho</S.Button>
      </S.Content>
    </S.CardContainer>
  );
};

export default ProductCard;

