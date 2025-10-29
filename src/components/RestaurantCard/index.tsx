import * as S from './styles';

type RestauranteCardProps = {
  title: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

const RestauranteCard = ({ title, rating, description, image, tags }: RestauranteCardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.CardImage src={image} alt={title} />
        
        <S.TagsContainer>
          {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagsContainer>
      </S.ImageContainer>

      <S.Content>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Rating>
            <span>{rating}</span>
            <span>⭐</span>
          </S.Rating>
        </S.Header>
        <S.Description>{description}</S.Description>
        <S.Button>Saiba mais</S.Button>
      </S.Content>
    </S.CardContainer>
  );
};

export default RestauranteCard;