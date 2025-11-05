import { PRODUTOS as hiokiProdutos } from "./hioki-sushi/produtos";
import { PRODUTOS as dolceVitaProdutos } from "./la-dolce-vita-trattoria/produtos";
import { PRODUTOS as raizesProdutos } from "./restaurante-raizes/produtos";
import { PRODUTOS as leParisProdutos } from "./le-paris/produtos";
import { PRODUTOS as muchachoProdutos } from "./muchacho/produtos";

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
  ...hiokiProdutos,
  ...dolceVitaProdutos,
  ...raizesProdutos,
  ...leParisProdutos,
  ...muchachoProdutos,
];

export const getProdutosByRestauranteId = (
  restauranteId: number
): Produto[] => {
  return PRODUTOS.filter((produto) => produto.restauranteId === restauranteId);
};
