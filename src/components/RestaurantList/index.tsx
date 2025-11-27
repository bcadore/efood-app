// Using hooks from RTK Query to fetch restaurantes
import { useGetRestaurantesQuery } from '../../services/api'
import RestauranteCard from "../RestaurantCard";
import * as S from "./styles";


// Restaurante type comes from the API service types — using data returned by RTK-Query

const RestauranteList = () => {
  const { data: restaurantes = [] } = useGetRestaurantesQuery()

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