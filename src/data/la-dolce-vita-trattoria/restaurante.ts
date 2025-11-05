import laDoceVitaTrattoria from "../../assets/la_dolce_vita_trattoria.png";

export type Restaurante = {
  id: number;
  title: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

export const RESTAURANTE: Restaurante = {
  id: 2,
  title: "La Dolce Vita Trattoria",
  rating: 4.6,
  description:
    "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  image: laDoceVitaTrattoria,
  tags: ["Italiana"],
};
