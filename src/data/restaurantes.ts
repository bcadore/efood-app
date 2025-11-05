import { RESTAURANTE as hiokiRestaurante } from "./hioki-sushi/restaurante";
import { RESTAURANTE as dolceVitaRestaurante } from "./la-dolce-vita-trattoria/restaurante";
import { RESTAURANTE as raizesRestaurante } from "./restaurante-raizes/restaurante";
import { RESTAURANTE as leParisRestaurante } from "./le-paris/restaurante";
import { RESTAURANTE as muchachoRestaurante } from "./muchacho/restaurante";
import { RESTAURANTE as dolceVitaRestaurante2 } from "./la-dolce-vita-trattoria/restaurante";

export type Restaurante = {
  id: number;
  title: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

export const DADOS_INICIAIS: Restaurante[] = [
  hiokiRestaurante,
  dolceVitaRestaurante,
  raizesRestaurante,
  leParisRestaurante,
  muchachoRestaurante,
  {
    ...dolceVitaRestaurante2,
    id: 6,
  },
];

export const getRestauranteById = (id: number): Restaurante | undefined => {
  return DADOS_INICIAIS.find((restaurante) => restaurante.id === id);
};
