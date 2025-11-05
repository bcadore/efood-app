import laDoceVitaTrattoria from "../../assets/la_dolce_vita_trattoria.png";

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
    id: 7,
    title: "Pizza Margherita",
    description:
      "A clássica Margherita: molho de tomate suculento, mussarela cremosa, manjericão fresco e azeite. Simplesmente irresistível!",
    image: laDoceVitaTrattoria,
    price: 60.9,
    porcao: "400g",
    restauranteId: 2,
  },
  {
    id: 8,
    title: "Risotto de Funghi",
    description:
      "Arroz cremoso italiano com cogumelos porcini, queijo parmesão e um toque de vinho branco. Elegante e saboroso!",
    image: laDoceVitaTrattoria,
    price: 78.9,
    porcao: "400g",
    restauranteId: 2,
  },
  {
    id: 9,
    title: "Lasanha à Bolonhesa",
    description:
      "Camadas de massa fresca, molho bolonhesa caseiro, queijo parmesão e béchamel cremoso. Assada no forno até dourar.",
    image: laDoceVitaTrattoria,
    price: 68.9,
    porcao: "500g",
    restauranteId: 2,
  },
  {
    id: 10,
    title: "Fettuccine Alfredo",
    description:
      "Massa fresca fettuccine com molho cremoso de parmesão, manteiga e pimenta do reino. Simples e sofisticado!",
    image: laDoceVitaTrattoria,
    price: 55.9,
    porcao: "350g",
    restauranteId: 2,
  },
  {
    id: 11,
    title: "Osso Buco ao Molho",
    description:
      "Vitela cozida lentamente com legumes, vinho branco e gremolada. Servido com polenta cremosa. Uma experiência única!",
    image: laDoceVitaTrattoria,
    price: 95.9,
    porcao: "600g",
    restauranteId: 2,
  },
  {
    id: 12,
    title: "Tiramisu Tradicional",
    description:
      "Sobremesa italiana clássica: biscoitos savoiardi embebidos em café, mascarpone e cacau. Deliciosamente cremoso!",
    image: laDoceVitaTrattoria,
    price: 32.9,
    porcao: "250g",
    restauranteId: 2,
  },
];
