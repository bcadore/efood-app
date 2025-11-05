import leParis from "../../assets/le_paris_francesa.jpeg";

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
    id: 13,
    title: "Coq au Vin",
    description:
      "Frango cozido lentamente no vinho tinto francês com cogumelos, cebola e ervas. Um clássico da culinária francesa.",
    image: leParis,
    price: 95.9,
    porcao: "500g",
    restauranteId: 4,
  },
  {
    id: 14,
    title: "Boeuf Bourguignon",
    description:
      "Carne bovina macia cozida no vinho tinto da Borgonha, com cebolas pérola, cenoura e bacon. Um prato reconfortante francês!",
    image: leParis,
    price: 105.9,
    porcao: "550g",
    restauranteId: 4,
  },
  {
    id: 15,
    title: "Ratatouille Provençal",
    description:
      "Legumes mediterrâneos cozidos lentamente: berinjela, abobrinha, pimentão e tomate. Temperado com ervas de Provence.",
    image: leParis,
    price: 52.9,
    porcao: "400g",
    restauranteId: 4,
  },
  {
    id: 16,
    title: "Soupe à l'Oignon",
    description:
      "Sopa clássica de cebola gratinada com queijo gruyère e pão. Perfeita para aquecer a alma em qualquer estação!",
    image: leParis,
    price: 38.9,
    porcao: "400ml",
    restauranteId: 4,
  },
  {
    id: 17,
    title: "Crêpe Suzette",
    description:
      "Panqueca francesa delicada com molho de laranja, açúcar caramelizado e licor Cointreau. Finalizado à chama!",
    image: leParis,
    price: 28.9,
    porcao: "2 unidades",
    restauranteId: 4,
  },
  {
    id: 19,
    title: "Escargots de Bourgogne",
    description:
      "Caracóis preparados com manteiga de alho, salsa e ervas finas. Servidos em conchas. Uma experiência gastronômica única!",
    image: leParis,
    price: 68.9,
    porcao: "6 unidades",
    restauranteId: 4,
  },
];
