import muchacho from "../../assets/muchacho_mexicana.png";

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
    id: 20,
    title: "Tacos Mexicanos",
    description:
      "Três tacos recheados com carne moída temperada, queijo, alface, tomate e molho picante. Autêntico sabor mexicano!",
    image: muchacho,
    price: 42.9,
    porcao: "3 unidades",
    restauranteId: 5,
  },
  {
    id: 21,
    title: "Burrito Supreme",
    description:
      "Tortilla grande recheada com frango grelhado, feijão, arroz, queijo, guacamole e creme azedo. Enorme e saboroso!",
    image: muchacho,
    price: 48.9,
    porcao: "1 unidade",
    restauranteId: 5,
  },
  {
    id: 22,
    title: "Quesadillas de Queijo",
    description:
      "Tortillas douradas recheadas com queijo derretido e pimentão. Acompanha guacamole e molho de pimenta. Simples e delicioso!",
    image: muchacho,
    price: 32.9,
    porcao: "4 fatias",
    restauranteId: 5,
  },
  {
    id: 23,
    title: "Nachos Supreme",
    description:
      "Tortilhas crocantes cobertas com queijo derretido, jalapeños, feijão, carne moída, guacamole e creme azedo. Impossível resistir!",
    image: muchacho,
    price: 45.9,
    porcao: "500g",
    restauranteId: 5,
  },
  {
    id: 24,
    title: "Chiles Rellenos",
    description:
      "Pimentas verdes recheadas com queijo e carne, empanadas e fritas. Servidas com molho de tomate apimentado. Picante e saboroso!",
    image: muchacho,
    price: 52.9,
    porcao: "2 unidades",
    restauranteId: 5,
  },
  {
    id: 25,
    title: "Churros com Chocolate",
    description:
      "Massa doce frita, crocante por fora e macia por dentro. Acompanha chocolate quente cremoso para mergulhar. Doce tradicional mexicano!",
    image: muchacho,
    price: 22.9,
    porcao: "4 unidades",
    restauranteId: 5,
  },
];
