import { useEffect, useState } from "react";
import RestauranteCard from "../RestaurantCard";
import * as S from "./styles";


type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};

const RestauranteList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res);
      });
  }, []);

  return (
    <S.Section>
      <div className="container">
        <S.Grid>
          {restaurantes.map((restaurante) => (
            <RestauranteCard
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              rating={restaurante.avaliacao}
              description={restaurante.descricao}
              image={restaurante.capa}
              tags={[restaurante.tipo]}
            />
          ))}
        </S.Grid>
      </div>
    </S.Section>
  );
};

export default RestauranteList;