import { useState } from "react";
import RestauranteCard from "../RestaurantCard";
import * as S from "./styles";
import { DADOS_INICIAIS } from "../../data/restaurantes";

const RestauranteList = () => {
  const [restaurantes] = useState(DADOS_INICIAIS);

  return (
    <S.Section>
      <S.Grid>
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            key={restaurante.id}
            id={restaurante.id}
            title={restaurante.title}
            rating={restaurante.rating}
            description={restaurante.description}
            image={restaurante.image}
            tags={restaurante.tags}
          />
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default RestauranteList;
