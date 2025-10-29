import { useState } from "react";
import RestauranteCard from "../RestaurantCard";
import * as S from "./styles";

import hiokiSushi from "../../assets/hioki_sushi.png";
import laDoceVitaTrattoria from "../../assets/la_dolce_vita_trattoria.png";

const DADOS_INICIAIS = [
  {
    id: 1,
    title: "Hioki Sushi",
    rating: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: hiokiSushi,
    tags: ["Destaque da semana", "Japonesa"],
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoceVitaTrattoria,
    tags: ["Italiana"],
  },
  {
    id: 3,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoceVitaTrattoria,
    tags: ["Italiana"],
  },
  {
    id: 4,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoceVitaTrattoria,
    tags: ["Italiana"],
  },
  {
    id: 5,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoceVitaTrattoria,
    tags: ["Italiana"],
  },
  {
    id: 6,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoceVitaTrattoria,
    tags: ["Italiana"],
  },
];

const RestauranteList = () => {
  const [restaurantes] = useState(DADOS_INICIAIS);

  return (
    <S.Section>
      <S.Grid>
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            key={restaurante.id}
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
