import hiokiSushi from "../../assets/hioki_sushi.png";

export type Produto = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  porcao: string;
  restauranteId: number;
};

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    title: "Sushi Combo Premium",
    description:
      "Seleção especial com 10 peças de sushi fresco, incluindo salmão, atum e camarão. Acompanha molho shoyu e wasabi.",
    image: hiokiSushi,
    price: 89.9,
    porcao: "10 peças",
    restauranteId: 1,
  },
  {
    id: 2,
    title: "Sashimi de Salmão",
    description:
      "Fatias finas e frescas de salmão de primeira qualidade, servidas sobre cama de rabanete. Acompanha molho ponzu e gengibre.",
    image: hiokiSushi,
    price: 65.9,
    porcao: "8 fatias",
    restauranteId: 1,
  },
  {
    id: 3,
    title: "Temaki de Atum",
    description:
      "Cone crocante de alga nori recheado com atum fresco, pepino, abacate e cebolinha. Perfeito para quem ama sabores intensos!",
    image: hiokiSushi,
    price: 18.9,
    porcao: "1 unidade",
    restauranteId: 1,
  },
  {
    id: 4,
    title: "Yakitori de Frango",
    description:
      "Espetinhos de frango grelhados no estilo tradicional japonês, com molho teriyaki doce e salgado. Irresistível!",
    image: hiokiSushi,
    price: 32.9,
    porcao: "4 espetinhos",
    restauranteId: 1,
  },
  {
    id: 5,
    title: "Ramen Tonkotsu",
    description:
      "Macarrão artesanal em caldo de porco cremoso e encorpado, com ovo cozido, alga nori, cebolinha e carne suculenta.",
    image: hiokiSushi,
    price: 45.9,
    porcao: "600ml",
    restauranteId: 1,
  },
  {
    id: 6,
    title: "Uramaki Filadélfia",
    description:
      "Rolo invertido com salmão defumado, cream cheese e pepino, envolvido por gergelim tostado. Cremoso e delicioso!",
    image: hiokiSushi,
    price: 42.9,
    porcao: "8 peças",
    restauranteId: 1,
  },
];
