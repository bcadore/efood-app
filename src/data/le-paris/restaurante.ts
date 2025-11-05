import leParis from "../../assets/le_paris_francesa.jpeg";

export type Restaurante = {
  id: number;
  title: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

export const RESTAURANTE: Restaurante = {
  id: 4,
  title: "Le Paris",
  rating: 4.8,
  description:
    "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  image: leParis,
  tags: ["Francesa"],
};
