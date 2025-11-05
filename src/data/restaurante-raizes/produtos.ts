import raizes from "../../assets/raizes_brasileira.png";

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
    id: 26,
    title: "Feijoada Completa",
    description:
      "O prato mais brasileiro de todos! Feijão preto, linguiça, bacon, carne seca e acompanhamentos: arroz, couve, farofa e laranja.",
    image: raizes,
    price: 49.9,
    porcao: "600g",
    restauranteId: 3,
  },
  {
    id: 27,
    title: "Picanha na Chapa",
    description:
      "Corte nobre grelhado no ponto, com aquele toque especial de sal grosso. Acompanha arroz, feijão tropeiro e batata frita.",
    image: raizes,
    price: 89.9,
    porcao: "400g",
    restauranteId: 3,
  },
  {
    id: 28,
    title: "Moqueca de Peixe",
    description:
      "Peixe fresco cozido no leite de coco, dendê, pimentão e cebola. Servido com pirão de peixe e arroz branco. Sabor nordestino autêntico!",
    image: raizes,
    price: 75.9,
    porcao: "550g",
    restauranteId: 3,
  },
  {
    id: 29,
    title: "Baião de Dois",
    description:
      "Arroz e feijão-de-corda refogados com queijo coalho, bacon e temperos regionais. Acompanha farofa e carne de sol.",
    image: raizes,
    price: 42.9,
    porcao: "500g",
    restauranteId: 3,
  },
  {
    id: 30,
    title: "Churrasco Misto",
    description:
      "Seleção de carnes grelhadas: picanha, linguiça, frango e costela. Acompanha farofa, vinagrete, arroz e feijão.",
    image: raizes,
    price: 95.9,
    porcao: "700g",
    restauranteId: 3,
  },
  {
    id: 31,
    title: "Brigadeiro Gourmet",
    description:
      "Doce brasileiro tradicional com leite condensado e chocolate, coberto com granulado. A paixão nacional em versão gourmet!",
    image: raizes,
    price: 8.9,
    porcao: "4 unidades",
    restauranteId: 3,
  },
];
