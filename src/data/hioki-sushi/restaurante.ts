import hiokiSushi from "../../assets/hioki_sushi.png";

export type Restaurante = {
  id: number;
  title: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

export const RESTAURANTE: Restaurante = {
  id: 1,
  title: "Hioki Sushi",
  rating: 4.9,
  description:
    "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  image: hiokiSushi,
  tags: ["Destaque da semana", "Japonesa"],
};
